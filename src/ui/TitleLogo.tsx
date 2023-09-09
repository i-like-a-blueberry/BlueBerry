const LogoSvg = (
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) => (
    // <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" {...props}>
    //   <title>Wikibooks SVG-demo: fill-opacity</title>
    //   <rect id="background" width="100%" height="100%" fill="white" />
    //   <circle
    //     cx="40"
    //     cy="40"
    //     r="35"
    //     stroke="black"
    //     stroke-width="4"
    //     fill="lightgrey"
    //   />
    //   <circle
    //     cx="60"
    //     cy="60"
    //     r="35"
    //     stroke="black"
    //     stroke-width="4"
    //     fill="lightgrey"
    //     fill-opacity="0.5"
    //   />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100"{...props}>
    <text x="20" y="50" font-family="Comic Sans MS" font-size="48" fill="black">BlueBerry</text>
    </svg>
    );
    export default LogoSvg;