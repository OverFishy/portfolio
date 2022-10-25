import { ProjectPageStructureText } from "../../shared/projectPage.js"

import flexpanels1 from '../../images/projectImages/flexpanels/flexpanels1.png'
import flexpanels2 from '../../images/projectImages/flexpanels/flexpanels2.jpg'
import flexpanels3 from '../../images/projectImages/flexpanels/flexpanels3.png'
import flexpanels4 from '../../images/projectImages/flexpanels/flexpanels4.png'
import flexpanelsgif1 from '../../images/projectImages/flexpanels/flexpanelsgif1.gif'

export function FlexPanelsGallery() {
  return (
    < ProjectPageStructureText
        projectName={'Flex panels gallery'}
        projectPurpose={'I developed this project as part of my JS learning journey. It was part of the online course JavaScript30.'}
        // projectPurpose={'Build that project within my JS learning journey, As a part Of the online course JavaScript30.'}
        projectWebStack={'JS, CSS & HTML with emphasis on Flex box properties.'}
        // projectWebStack={'Js Css & HTML with emphasis on Flex box properties.'}
        projectProblens={'The main problem I had with this project was that it was too much fun to work on. It is amazing to see when everything you do has an immediate effect that is visible on the screen.'}
        // projectProblens={'The main problem I had during this project that it was to much fun to work with. When everythig you do have an immediete effect visable on the screen'}
        projectlessons={'During this project I learned a lot about flexBox and JS functionality.'}
        // projectlessons={'I have learned alot about flexBox and Js functionality'}
        projectPics={[flexpanels1, flexpanels2, flexpanels3, flexpanels4, flexpanelsgif1]}
        github={'https://github.com/OverFishy/Flex-Panel-Gallery/tree/main'}
        site={'https://overfishy.github.io/Flex-Panel-Gallery/index-START.html'}
        backToProject={'/#flexpanelsgallery'}
      />
  )
}
