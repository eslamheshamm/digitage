import { Card, CardFlipped } from "./card"

import card1 from "@/images/card1.png"
import card2 from "@/images/card2.png"
import card3 from "@/images/card3.png"
import card4 from "@/images/card4.png"
import card5 from "@/images/card5.png"
import card6 from "@/images/card6.png"
import card7 from "@/images/card7.png"

const Cards = () => {
  const card = {
    boxShadow: "0px 8px 70px 0px #141108, 8%",
    background:
      "linear-gradient(89.14deg, rgba(18, 18, 17, 0.11) 3.09%, rgba(29, 24, 9, 0) 106.74%)",
  }

  return (
    <div>
      <Card
        heading={`Digital Marketing`}
        text={`We achieve your business goals using digital marketing solutions, we have a long experience that enables us to open other doors for your earnings. We build a strategy that fits your business goal, by completing all stages we can reach the place that you want.`}
        backgroundText={`Digital marketing`}
        style={card}
        img={card1}
      />
      <CardFlipped
        heading={`Animation`}
        text={`We make a story that fits your project and its goals, using 2D/3D movements that combine your information with the sound and dynamic matches to produce a story that reaches your client's fast.`}
        backgroundText={`Animation`}
        style={card}
        img={card2}
      />
      <Card
        heading={`Branding`}
        text={`We build a complete identity to mark you, the key factor we use to achieve our goal of leaving your business's legacy to stand out. We starting from scratch, choosing the name, picking the colors, building the logo, designing the business cards, and all of your branding stuff`}
        backgroundText={`Branding`}
        style={card}
        img={card3}
      />
      <CardFlipped
        smallHeading={`Digital`}
        heading={`Production Services`}
        text={`Using many production tools like cameras to convert our ideas to visual stories that could definitely catch your target audience.`}
        backgroundText={`Production Services`}
        style={card}
        img={card4}
      />
      <Card
        heading={`Event Organization`}
        text={`We are responsible for organizing parties and events with all facilities in the best possible way.`}
        backgroundText={`Event Organization`}
        style={card}
        img={card6}
      />
      <CardFlipped
        heading={`Marketing solutions`}
        text={`In the event that the return on investment from your business is not good, we re-arrange things correctly and then build plans and strategies that help you achieve the highest return on investment from your business.`}
        backgroundText={`Marketing solutions`}
        style={card}
        img={card5}
      />
      <Card
        heading={`Interfaces`}
        text={`We design interfaces for large stores and malls with the best international materials.`}
        backgroundText={`Interfaces`}
        style={card}
        img={card7}
      />
    </div>
  )
}

export default Cards
