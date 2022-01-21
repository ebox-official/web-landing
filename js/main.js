var textForRotation = ["Made Simple", "Made Safe", "Made Reversible", "Reinvented"];
var textForRotationIndex = 1;
var rotateTime = 3000;

function rotateText() {
    document.querySelector("#rotatedText").style.opacity = "0";

    setTimeout(function() {
        document.querySelector("#rotatedText").innerHTML = textForRotation[textForRotationIndex];
        document.querySelector("#rotatedText").style.opacity = "1";

        document.querySelector("#rotatedTextUnderline").style.width = document.querySelector("#rotatedText").offsetWidth + "px";
        
        textForRotationIndex = ++textForRotationIndex % textForRotation.length;
    
        setTimeout(rotateText, rotateTime);
    }, 450);
}

rotateText();

function scrollParallax(elementSelector, triggerElement, duration, transformFrom, transformTo) {

    var tween = new TimelineMax().
        add([
            TweenMax.fromTo(
                elementSelector,
                1,
                { transform: transformFrom },
                { transform: transformTo, ease: Linear.easeNone }
            )
        ]);

    // build scene
    new ScrollMagic.Scene({ triggerElement, duration })
        .setTween(tween)
        // .addIndicators()
        .addTo(new ScrollMagic.Controller());
}

// scrollParallax(
//     "#roadmap-ghost-title",
//     "#roadmap-ghost-title-trigger",
//     333,
//     "translate(-50%, -20%)",
//     "translate(-50%, -80%)"
// );

let Scrollbar = window.Scrollbar;
let scrollbar = Scrollbar.init(document.querySelector('#main-scrollbar'), {
    continuousScrolling: false
});

window.addEventListener('hashchange', function () {
    let hash = window.location.hash;
    if (hash) {
        let target = document.getElementById(hash.substring(1));
        if (target) {
            scrollbar.scrollIntoView(target, {
                offsetTop: -scrollbar.containerEl.scrollTop,
            });
        }
    }
}, false);