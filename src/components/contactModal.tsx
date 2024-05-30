"use client"

import React, { useContext, useState } from 'react'
import Block from './Block'
import { Button } from './ui/button'
import { CircleCheckBig, Link, Loader, SendHorizontal, X } from 'lucide-react';
import { Questions } from '@/types/types';
import { useForm } from "react-hook-form";
import { toast, useToast } from './ui/use-toast';
import { sendEmail } from '@/utils/sendEmail';

interface modalProps {
    isOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
const ContactModal = ({ isOpenModal }: modalProps) => {
    const initialQuestions: Questions[] = [
        {id: 1, questionText: "Please provide me with your email?", answer: '', placeholder: 'Enter email: ', name: 'email'},
        {id: 2, questionText: "Awesome!  And what's your name?", answer: '', placeholder: 'Enter name: ', name: 'name'},
        {id: 3, questionText: "Perfect, and how can I help you?", answer: '', placeholder: 'Enter message: ', name: 'message'}
    ];

    const [questions, setQuestions] = useState<Questions[]>(initialQuestions);
    const [currQnIndex, setCurrQnIndex] = useState<number>(0);
    const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);
    const [showButtons, setShowButtons] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {register, handleSubmit, setValue, trigger, formState: { errors }} = useForm()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value} = e.target
        setValue(name, value)

        const newQuestions = [...questions];
        const currQuestion = newQuestions[currQnIndex];

        currQuestion.answer = value;
        setQuestions(newQuestions)
    };

    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const currQnName = questions[currQnIndex].name;
        const isValid = await trigger(currQnName);

        if (isValid) {
          if (currQnIndex === questions.length - 1) {
            setShowButtons(true);
            setIsLastQuestion(true);
          } else {
            setCurrQnIndex(currQnIndex + 1);
          }
        } else {
          toast({
            title: "Error",
            description: `${questions[currQnIndex].name} is required!`,
            variant: "destructive",
          });
        }
      }
    };

   const handleReset = () => {
        setQuestions(initialQuestions);
        setCurrQnIndex(0);
        setShowButtons(false);
        setIsLastQuestion(false);
    };

    const onSubmit = async () => {
      setIsLoading(true);
      try {
        await sendEmail(questions, () => isOpenModal(false))
      } finally {
        setIsLoading(false)
      }
    };


  return (
      <Block className="gap-2 bg-accent" style={{ fontFamily: "monospace" }}>
        <div className="flex items-center justify-between bg-background p-2 rounded-t-lg">
          <div className="flex gap-1">
            <p className="w-3 h-3 rounded-full bg-red-500"></p>
            <p className="w-3 h-3 rounded-full bg-yellow-500"></p>
            <p className="w-3 h-3 rounded-full bg-green-500"></p>
          </div>
          <div>
            <p className="text-sm" >
              contact@SammyMusyoki
            </p>
          </div>
          <Button onClick={() => isOpenModal(false)} variant="ghost">
            <X size={16} />
          </Button>
        </div>
          <div className='bg-transparent border border-background rounded-b-lg px-2'>
            <div className="flex items-center gap-1 py-2 border-b-2 border-dashed border-foreground">
              <p className="text-sm">Hey there! I&apos;m excited to link </p>
              <Link size={16} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2 py-2">
              {questions.slice(0, currQnIndex + 1).map((question, index) => (
                <div key={question.id} className="mb-2">
                  <p className="text-sm">{question.questionText}</p>
                  {index === currQnIndex && !isLastQuestion ? (
                    <>
                    <input
                      type="text"
                      {...register(question.name, {required: true})}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyPress}
                      className=" bg-transparent border-none outline-none caret-foreground placeholder-gray-500 text-sm px-2 py-1 w-full"
                      placeholder={question.placeholder}
                      autoFocus
                      style={{ fontFamily: "monospace" }}
                    />
                    {errors[question.name] && (
                      <p className="text-red-500 mt-1 text-xs">This field is required!</p>
                    )}
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-primary flex items-center gap-2">
                        <CircleCheckBig size={14} /> {question.answer}
                      </p>
                      {isLastQuestion && index === questions.length - 1 && (
                        <>
                          <p className="text-sm mt-2">
                            Beautiful! Here&apos;s what we&apos;ve got:
                          </p>
                          <blockquote className="border border-border mt-2 p-2 flex flex-col rounded-lg shadow-md bg-background">
                            {questions.map((q) => (
                              <p key={q.id} className="mb-2 text-sm">
                                {q.answer}
                              </p>
                            ))}
                          </blockquote>
                          <p className="text-sm mt-2">Look good?</p>
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
              {showButtons && (
                <div className="flex space-x-3">
                  <Button onClick={handleReset} variant="destructive">
                    Reset
                  </Button>
                  <Button type="submit" variant="default" className="gap-2">
                    {
                      isLoading ? (
                        <span className='flex items-center gap-2'>
                          <Loader className='h-4 w-4 animate-spin'/>
                          Sending...
                        </span>
                      ) : (
                        <span className='flex items-center gap-2'>Send <SendHorizontal size={14} /></span>
                      )
                    }
                  </Button>
                </div>
              )}
            </form>
          </div>
      </Block>
  );
};


export default ContactModal

