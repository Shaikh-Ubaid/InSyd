//Setting up iframe
var iframe = document.createElement('iframe');
iframe.width = screen.width * 0.4;
iframe.height = screen.height * 0.4;


//Setting all tippies
var allTippies = tippy('a', {
    // arrow:false,
    // zIndex: 999999,
    placement: 'auto',
    interactive: true,
    allowHTML: true,
    delay: [0, 100],
    content: "&#128495",
    // appendTo: document.body,
    onCreate(instance) {
        instance._link=instance.reference.href;
        // instance._newTarget=instance.reference;
        // console.log(instance);
    },
});

allTippies.forEach(function (t) {
    tippy(t.popper, {
        // zIndex: 999999,
        maxWidth: 'none',
        delay: [800, 200],
        arrow: true,
        inertia: true,
        animation: 'scale',
        placement: 'auto',
        interactive: true,
        appendTo: t.popper,

        // allowHTML: true,
        // popperOptions: {
        //     strategy: 'fixed',
        //   },
        onShow(instance) {
            iframe.src=t._link;
            instance.setContent(iframe);
            // console.log("current source is", iframe.src);
        },
    });
});
