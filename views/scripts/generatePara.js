



async function generateParagraph(content,subject) {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization:  `Bearer ${API}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "you are a professor/teacher now answer queries" },
                    { role: "user", content: `Explain the key concepts, principles, and significance of ${content} within the broader subtopic of ${subject}. Provide a detailed paragraph for a comprehensive understanding.` },
                ],
                max_tokens: 150, // Adjust as needed
            }),
        });

        //const response={"id":"chatcmpl-8yK6TCCIjhWu8LYqAKpD4JkERLSz5","object":"chat.completion","created":1709387649,"model":"gpt-3.5-turbo-0125","choices":[{"index":0,"message":{"role":"assistant","content":"The impulse-momentum theorem is a fundamental principle in physics that relates the change in momentum of an object to the force applied to it over a period of time. Momentum is the product of an object's mass and velocity, while impulse is the product of force and time. The theorem states that the impulse experienced by an object is equal to the change in its momentum. Mathematically, this can be expressed as F∆t = ∆(mv), where F is the force applied, ∆t is the time interval for ashdjhasjhsjkdhjksahdjkshdjkhsajkhdasjkhdjkashdjkashdkjhaskjdhjkashdkjshajdhawkjhduiwahduawhfuwbfuibvebvuibvuwbuwbohdowhohwohcuwohcouwhcouhwuhfuohwufubvbuebutruhtweuivijvppiejvpiejvjaejepjapjawjfpawjrpjwpafpiwjfpjwjfjhebvbbdvndcmsmccslcpsldpqwpeowiroiwr which the force is applied, and ∆(mv) is the change in momentum.\n\nThe significance of the impulse-momentum theorem lies in its application to various real-world scenarios, such as collisions, explosions, and"},"logprobs":null,"finish_reason":"length"}],"usage":{"prompt_tokens":55,"completion_tokens":150,"total_tokens":205},"system_fingerprint":"fp_2b778c6b35"}
        
        //const data = response
        const data = await response.json();
        quiztopic=content;
        
        console.log(quiztopic)
        
        console.log(JSON.stringify(data))
        const generatedParagraph = data.choices[0].message.content;

        const rightContent = document.getElementById('right-content');
        
        rightContent.innerHTML = `<p>${generatedParagraph}</p>`;
        const quizButton = document.createElement('button');
        quizButton.textContent = 'Take Quiz';
        quizButton.id = 'quizBtn';

        
        rightContent.appendChild(quizButton);

        
        quizButton.addEventListener('click', () => openQuizPage(content));
        
        
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function openQuizPage(content) {
    // Assuming quiztopic and content are already defined

    // Construct the URL with query parameters
    const quizUrl = `http://localhost:3000/quiz?topic=${quiztopic}`;

    // Change the current window's location to the quiz page
    window.location.href = quizUrl;
}

// module.exports = {generateParagraph};