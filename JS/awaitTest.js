async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function hundredSeconds() {
    let i = 0;
    while (i < 100) {
        console.log(i);
        await wait(1000);
        i++;
    } 
}

hundredSeconds();