import { useEffect, useState } from "react";

const CodeBox = () => {
  const [text, setText] = useState("")
  const code = `
    package main

    import (
      "fmt"
    )

    func main() {
      fmt.Println("Welcome Lad.")
    }
  `;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(code.slice(0, i+1));
      i++;
      if (i === code.length) clearInterval(interval);
    }, 50)

    return () => clearInterval(interval);
  }, [])

  return (
    <section className="mt-30 min-h-[235px] flex-center">
      <div className="bg-box border-2 border-border rounded-md w-[75%] md:w-[300px] mx-auto pb-2">
        <div className="flex-start gap-2 pl-4 mb-4 bg-border py-3">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <pre className="text-[10px] text-accent">
          <code>{text}<span className="text-blue-400">|</span></code>
        </pre>
      </div>
    </section>
  )
}

export default CodeBox