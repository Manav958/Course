



async function  subtopicToSubtopics(entry) {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization:  `Bearer ${API}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model:"gpt-3.5-turbo",

            messages: [
            { role: "system", content: "you are a professor/teacher now answer queries" },
            { role: "user", content: `Generate a list of subtopics related to ${entry}. Provide the information in bullet points.   ` },
            ],
            max_tokens: 100,
        }),
        });
        //const response={"id":"chatcmpl-8yEmQJaHeTWrFTxjRqmNYH4Ot4EkL","object":"chat.completion","created":1709367186,"model":"gpt-3.5-turbo-0125","choices":[{"index":0,"message":{"role":"assistant","content":"- Impulse and Momentum\n  - Definition of impulse and momentum\n  - Calculation of impulse and momentum\n  - Impulse-Momentum theorem\n  - Conservation of momentum\n  - Applications of impulse and momentum in real life\n  - Elastic and inelastic collisions\n  - Impulse and momentum in sports\n  - Impulse and momentum in car crashes\n  - Impulse and momentum in rocket propulsion\n  - Impulse and momentum in fluid dynamics"},"logprobs":null,"finish_reason":"stop"}],"usage":{"prompt_tokens":42,"completion_tokens":93,"total_tokens":135},"system_fingerprint":"fp_2b778c6b35"}

        const data = await response.json();
        //const data = response;
        console.log(JSON.stringify(data));

        const firstChoice = data.choices[0];
        const subcontentList = firstChoice.message.content.split('\n').filter(item => item.trim() !== '');
        console.log(subcontentList);
        return subcontentList;
    } 
catch (error) {
    console.error("Error:", error.message);
}
}

// module.exports = {subtopicToSubtopics};