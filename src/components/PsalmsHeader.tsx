

const renderWord = (word: string) => {
    return word.split('').map((letter, index) => {
        const className: string = (letter === "P" || letter === "l")
        ? ('text-violet-300 dark:text-violet-950') : ('text-primary')
        return (
            <span key={index} className={className}>
                {letter}
            </span>
        )
    })
}

const PsalmsHeader = () => {
    const word = "Psalms"

  return <span>
    {renderWord(word)}
  </span>;
};

export {
    renderWord,
    PsalmsHeader,
}