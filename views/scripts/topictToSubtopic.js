



async function getApiKey() {
    try {
      const response = await fetch('/api-key');
      const data = await response.json();
    // console.log (data)
      return data;
    } catch (error) {
      console.error('Error fetching API key:', error);
    }
  }
let API;

getApiKey().then(apiKey => {
    API = apiKey.api;
    // console.log('API Key:', API);
    
    
});

async function subTopic(subject) {
    // Simulate fetching content for the sidebar entries
    const contentList = await topicToSubtopic(subject);
    return contentList;

    
}



async function topicToSubtopic(subject) {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model:"gpt-3.5-turbo",

            messages: [
            { role: "system", content: "you are a professor/teacher now answer queries" },
            { role: "user", content: `Generate a list of subtopics related to ${subject}. Provide the information in bullet points. ` },
            ],
            max_tokens: 100,
        }),
        });
        //const response={"id":"chatcmpl-8yEmIElJIIDn3KfKcCLUiRzOiRAKS","object":"chat.completion","created":1709367178,"model":"gpt-3.5-turbo-0125","choices":[{"index":0,"message":{"role":"assistant","content":"- Newton's First Law: Law of Inertia\n- Newton's Second Law: Force and Acceleration\n- Newton's Third Law: Action and Reaction\n- Applications of Newton's Laws in everyday life\n- Forces acting on objects: weight, tension, normal, frictional\n- Free body diagrams and force vectors\n- Impulse and momentum\n- Conservation of momentum\n- Motion in a gravitational field: projectiles, orbits\n- Newton's Laws in different reference frames\n- Limitations and"},"logprobs":null,"finish_reason":"length"}],"usage":{"prompt_tokens":41,"completion_tokens":100,"total_tokens":141},"system_fingerprint":"fp_2b778c6b35"}

        const data = await response.json();
        //const data = response;
        console.log(JSON.stringify(data));

        const firstChoice = data.choices[0];
        const subtopicsList = firstChoice.message.content.split('\n').filter(item => item.trim() !== '');
        console.log(subtopicsList);
        
        return subtopicsList;
    } 
    catch (error) {
        console.error("Error:", error.message);
    }
}

// module.exports = {subTopic};