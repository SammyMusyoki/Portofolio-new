"use client"

import React, { useState } from 'react'
import Block from './Block'
import { Button } from './ui/button'
import { CircleCheckBig, Link, SendHorizontal, X } from 'lucide-react';
import { Questions } from '@/types/types';
import backgroundImage from '../../public/images/linux.jpeg'

interface modalProps {
    isOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
const ContactModal = ({ isOpenModal }: modalProps) => {
    const initialQuestions: Questions[] = [
        {id: 1, questionText: "Please provide me with your email?", answer: '', placeholder: 'Enter email: '},
        {id: 2, questionText: "Awesome!  And what's your name?", answer: '', placeholder: 'Enter name: '},
        {id: 3, questionText: "Perfect, and how can I help you?", answer: '', placeholder: 'Enter message: '}
    ];

    const [questions, setQuestions] = useState<Questions[]>(initialQuestions);
    const [currQnIndex, setCurrQnIndex] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');
    const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);
    const [showButtons, setShowButtons] = useState<boolean>(false);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    };

    const updateAnswer = () => {
        const newQuestions = [...questions]
        newQuestions[currQnIndex].answer = inputValue

        setQuestions(newQuestions);
        setInputValue('');

        if (currQnIndex < questions.length -1) {
            setCurrQnIndex(currQnIndex + 1);
        }        
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            if (currQnIndex === questions.length - 1) {
                updateAnswer()
                setShowButtons(true)
                setIsLastQuestion(true);
            } else {
                updateAnswer()
            }
        }
    }

    const handleReset = () => {
        setQuestions(initialQuestions);
        setCurrQnIndex(0);
        setInputValue("");
        setShowButtons(false);
        setIsLastQuestion(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      console.log('Sending email with the following answers:', questions)
    };


  return (
    <Block className="gap-2" style={{ fontFamily: "monospace" }}>
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
          <form onSubmit={handleSubmit} className="space-y-4 mt-2 py-2">
            {questions.slice(0, currQnIndex + 1).map((question, index) => (
              <div key={question.id} className="mb-2">
                <p className="text-sm">{question.questionText}</p>
                {index === currQnIndex && !isLastQuestion ? (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className=" bg-transparent border-none outline-none caret-foreground placeholder-gray-500 text-sm px-2 py-1 w-full"
                    placeholder={question.placeholder}
                    autoFocus
                    style={{ fontFamily: "monospace" }}
                  />
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
                  Send <SendHorizontal size={14} />
                </Button>
              </div>
            )}
          </form>
        </div>
    </Block>
  );
};


export default ContactModal

