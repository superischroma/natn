let windowSequence = [];
for (let win of document.querySelectorAll(".window"))
{
    let name = win.id.replace("-window", "");
    windowSequence.push(name);
    let caption = document.getElementById(name + "-image-c");
    if (!caption) continue;
    console.log("yuh: " + name);
    document.getElementById(name + "-image-q").addEventListener("click", ev =>
    {
        if (caption.style.display != "inline")
            caption.style.display = "inline";
        else
            caption.style.display = "none";
    });
}
windowSequence.shift();

let continueButton = document.getElementById("continue");
/** @type {HTMLElement} */
let currentWindow;
openWindow("welcome");
setTimeout(() => openWindow("start"), 2000);

continueButton.addEventListener("click", ev =>
{
    if (windowSequence.length <= 1) return;
    windowSequence.shift();
    openWindow(windowSequence[0]);
});

function openWindow(name)
{
    let window = document.getElementById(name + "-window");
    //document.body.style.backgroundColor = window.style.backgroundColor;
    if (currentWindow)
    {
        currentWindow.classList.add("fo");
        currentWindow.classList.remove("fi");
        if (continueButton.style.display === "block")
            continueButton.classList.add("fo");
        continueButton.classList.remove("fi");
        setTimeout(() =>
        {
            currentWindow.style.display = "none";
            window.style.display = "block";
            window.classList.add("fi");
            continueButton.classList.remove("fo");
            if (windowSequence.length > 1)
            {
                continueButton.classList.add("fi");
                continueButton.style.display = "block";
            }
            else
                continueButton.style.display = "none";
        }, 0);
        currentWindow = window;
        return;
    }
    window.style.display = "block";
    window.classList.add("fi");
    currentWindow = window;
}