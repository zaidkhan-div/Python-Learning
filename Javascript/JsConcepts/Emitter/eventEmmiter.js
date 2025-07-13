// Create or connect to the channel
const channel = new BroadcastChannel('chat_channel');

// Listen for messages
channel.onmessage = (event) => {
    console.log('Received in this tab:', event.data);
};

// Send a message
channel.postMessage('Hello from another tab1');

// +++=================--

const channel = new BroadcastChannel('my_channel');

// Listener (both tabs)
channel.onmessage = (e) => {
    console.log('Received:', e.data);
};

// Emitter (any tab)
channel.postMessage('Hello from Tab A');



// Tab A
localStorage.setItem('myEvent', Date.now());

// Tab B
window.addEventListener('storage', (e) => {
    if (e.key === 'myEvent') {
        console.log('Event received in Tab B');
    }
});
