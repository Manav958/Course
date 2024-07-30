


async function QuizGenerator(topic) {
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
            { role: "user", content: `Generate a multiple choice quiz of five questions of the topic ${topic} with 4 options and below it its correct answer separate the question options and answer like this 
                 
               [{"question": "In an elastic collision, which of the following statements is true?",
                     "options": ["A) Kinetic energy is not conserved", "B) Momentum is conserved", "C) Objects stick together after colliding", "D) Total energy is not conserved"],
                     "correctAnswer": "B) Momentum is conserved"
                } , other questions.. ] here inside the array there is a dictionary having key value pair of "question" : then a string or array  the key should also be string so that i can use JSON.parse() generate response like this only `  },
            ],
            max_tokens: 1000,
        }),
        });
        //const response={"id":"chatcmpl-9PETRUWRfmaMUab4QU7bazfF5Zb2x","object":"chat.completion","created":1715800865,"model":"gpt-3.5-turbo-0125","choices":[{"index":0,"message":{"role":"assistant","content":"[\n    {\n        \"question\": \"In an elastic collision, which of the following statements is true?\",\n        \"options\": [\"A) Kinetic energy is not conserved\", \"B) Momentum is conserved\", \"C) Objects stick together after colliding\", \"D) Total energy is not conserved\"],\n        \"correctAnswer\": \"B) Momentum is conserved\"\n    },\n    {\n        \"question\": \"Which of the following describes an inelastic collision?\",\n        \"options\": [\"A) Total kinetic energy is conserved\", \"B) Momentum is not conserved\", \"C) Objects bounce off each other after colliding\", \"D) Total energy is conserved\"],\n        \"correctAnswer\": \"A) Total kinetic energy is conserved\"\n    },\n    {\n        \"question\": \"What happens to the kinetic energy in an inelastic collision?\",\n        \"options\": [\"A) Increases\", \"B) Decreases\", \"C) Stays the same\", \"D) Transfers to potential energy\"],\n        \"correctAnswer\": \"B) Decreases\"\n    },\n    {\n        \"question\": \"In an elastic collision, what is the relationship between the final velocities of the objects compared to the initial velocities?\",\n        \"options\": [\"A) Final velocities are always less than initial velocities\", \"B) Final velocities are always greater than initial velocities\", \"C) Final velocities are always equal to initial velocities\", \"D) Final velocities are unpredictable\"],\n        \"correctAnswer\": \"C) Final velocities are always equal to initial velocities\"\n    },\n    {\n        \"question\": \"Which of the following is an example of an elastic collision?\",\n        \"options\": [\"A) A car crashing into a wall\", \"B) Two balls colliding and bouncing off each other\", \"C) A rocket launching into space\", \"D) A falling raindrop hitting the ground\"],\n        \"correctAnswer\": \"B) Two balls colliding and bouncing off each other\"\n    }\n]"},"logprobs":null,"finish_reason":"stop"}],"usage":{"prompt_tokens":182,"completion_tokens":404,"total_tokens":586},"system_fingerprint":null}

        const data = await response.json();
        //const data = response;
        console.log(JSON.stringify(data));

        const firstChoice = data.choices[0];
        const subtopicsList = firstChoice.message.content;
        console.log(subtopicsList);
        
        return subtopicsList;
    } 
    catch (error) {
        console.error("Error:", error.message);
    }
}

