        /*
         * =======================================================
         * PORTFOLIO VERSION 5
         * =======================================================
         *
         * The animation system has two mechanisms:
         *
         * 1. IntersectionObserver
         *    Modern and efficient.
         *
         * 2. Scroll-position fallback
         *    If the observer does not behave correctly,
         *    the page still detects elements manually.
         *
         * Before JavaScript starts, everything is visible.
         * The class "js-enabled" is only added after the script
         * is ready.
         *
         * This prevents the desktop page from getting stuck
         * with invisible elements.
         */


        /* =======================================================
           ENABLE JAVASCRIPT ANIMATIONS
        ======================================================= */

        document.body.classList.add("js-enabled");


        /* =======================================================
           NAVBAR
        ======================================================= */

        const navbar =
            document.getElementById("navbar");


        function updateNavbar() {

            if (window.scrollY > 40) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        }


        window.addEventListener(
            "scroll",
            updateNavbar,
            {passive: true}
        );


        updateNavbar();


        /* =======================================================
           SCROLL REVEAL
        ======================================================= */

        const revealElements =
            Array.from(
                document.querySelectorAll(
                    ".scroll-reveal"
                )
            );


        /*
         * Mark elements already visible when the page loads.
         *
         * This is especially useful if the browser restores
         * the user's previous scroll position.
         */

        function revealVisibleElements() {

            const viewportHeight =
                window.innerHeight;


            revealElements.forEach(
                (element) => {

                    const rect =
                        element.getBoundingClientRect();


                    const trigger =
                        viewportHeight * 0.90;


                    if (
                        rect.top < trigger &&
                        rect.bottom > 0
                    ) {

                        element.classList.add(
                            "is-visible"
                        );

                    }

                }
            );

        }


        /* =======================================================
           INTERSECTION OBSERVER
        ======================================================= */

        let observer = null;


        if ("IntersectionObserver" in window) {

            observer =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "is-visible"
                                    );

                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        root: null,

                        rootMargin:
                            "0px 0px -8% 0px",

                        threshold:
                            0.01
                    }
                );


            revealElements.forEach(
                (element) => {

                    observer.observe(element);

                }
            );

        }


        /* =======================================================
           SCROLL FALLBACK
        ======================================================= */

        let ticking = false;


        function fallbackReveal() {

            if (ticking) {
                return;
            }


            ticking = true;


            window.requestAnimationFrame(
                () => {

                    revealVisibleElements();

                    ticking = false;

                }
            );

        }


        window.addEventListener(
            "scroll",
            fallbackReveal,
            {
                passive: true
            }
        );


        window.addEventListener(
            "resize",
            fallbackReveal
        );


        /*
         * Run immediately.
         */

        revealVisibleElements();


        /*
         * Run again after the page finishes loading.
         * This helps with images, fonts and restored scroll.
         */

        window.addEventListener(
            "load",
            () => {

                revealVisibleElements();

                setTimeout(
                    revealVisibleElements,
                    150
                );

                setTimeout(
                    revealVisibleElements,
                    500
                );

            }
        );


        /* =======================================================
           PROJECT CARD 3D EFFECT
        ======================================================= */

        const projectCards =
            document.querySelectorAll(
                ".project-card"
            );


        projectCards.forEach(
            (card) => {

                card.addEventListener(
                    "mousemove",
                    (event) => {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const percentX =
                            x / rect.width;


                        const percentY =
                            y / rect.height;


                        const rotateY =
                            (percentX - 0.5) * 5;


                        const rotateX =
                            (percentY - 0.5) * -5;


                        card.style.setProperty(
                            "--rx",
                            `${rotateX}deg`
                        );


                        card.style.setProperty(
                            "--ry",
                            `${rotateY}deg`
                        );


                        card.style.setProperty(
                            "--mx",
                            `${percentX * 100}%`
                        );


                        card.style.setProperty(
                            "--my",
                            `${percentY * 100}%`
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.setProperty(
                            "--rx",
                            "0deg"
                        );

                        card.style.setProperty(
                            "--ry",
                            "0deg"
                        );

                        card.style.setProperty(
                            "--mx",
                            "50%"
                        );

                        card.style.setProperty(
                            "--my",
                            "50%"
                        );

                    }
                );

            }
        );


        /* =======================================================
           SMOOTH INTERNAL LINKS
        ======================================================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        (event) => {

                            const targetId =
                                link.getAttribute(
                                    "href"
                                );


                            if (
                                !targetId ||
                                targetId === "#"
                            ) {
                                return;
                            }


                            const target =
                                document.querySelector(
                                    targetId
                                );


                            if (!target) {
                                return;
                            }


                            event.preventDefault();


                            target.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }
                    );

                }
            );


        /* =======================================================
           SCROLL PROGRESS BAR
        ======================================================= */

        const progressBar =
            document.createElement(
                "div"
            );


        progressBar.setAttribute(
            "aria-hidden",
            "true"
        );


        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 2px;
            width: 0%;
            z-index: 2000;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                #8b5cf6,
                #06b6d4
            );
            transition: width 0.08s linear;
        `;


        document.body.appendChild(
            progressBar
        );


        function updateProgress() {

            const scrollTop =
                window.scrollY;


            const documentHeight =
                document.documentElement
                    .scrollHeight;


            const viewportHeight =
                window.innerHeight;


            const scrollable =
                documentHeight -
                viewportHeight;


            const percentage =
                scrollable > 0
                    ? (
                        scrollTop /
                        scrollable
                    ) * 100
                    : 0;


            progressBar.style.width =
                `${percentage}%`;

        }


        window.addEventListener(
            "scroll",
            updateProgress,
            {
                passive: true
            }
        );


        window.addEventListener(
            "resize",
            updateProgress
        );


        updateProgress();


        /* =======================================================
           FINISH
        ======================================================= */

        setTimeout(
            () => {

                revealVisibleElements();

            },
            100
        );

