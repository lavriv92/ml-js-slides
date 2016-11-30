// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#009688",
  "secondary": "#ddd",
  code: '#2d2d2d',
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading fit>Exploring ML in JavaScript</Heading>
            <Link textColor="secondary">@ilavriv</Link>
          </Slide>
          <Slide>
            <Heading>Agenda</Heading>
            <List margin="0 auto">
              <ListItem>Reasoning for JS</ListItem>
              <ListItem>Classification & Regression</ListItem>
              <ListItem>Clustering</ListItem>
              <ListItem>Neural Networks</ListItem>
              <ListItem>Demo</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>ML in another communities</Heading>
          </Slide>
          <Slide>
            <List>
              <Appear>
                <ListItem textSize="50" fit>
                  Python and R are awesome but ML is not only for these
                  languages
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="50" fit>
                  Java and Ruby guys are already talking and using ML
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>What about JS?</Heading>
          </Slide>
          <Slide>
            <List margin="0 auto">
              <Appear>
                <ListItem textSize="50">
                  JS is awesome, but we can use ML to make more intelligent solutions
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="50">
                  JS is trendy, so we have to stick with a new trends
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>ML Use Cases in a Browser</Heading>
          </Slide>
          <Slide>
            <List>
              <Appear>
                <ListItem textSize="50">
                  Robot checking
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="50">
                  Better AB tests in your application
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
              <Heading>Why Use JS?</Heading>
              <Text>ADD SLIDE. </Text>
          </Slide>
          <Slide>
            <Heading>
              Before We Continue...
            </Heading>
          </Slide>
          <Slide>
            <Heading>
              ML in 2 mins :)
            </Heading>
          </Slide>
          <Slide>
            <List>
              <Appear>
                <ListItem>
                  Specified data structures & pipeline
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Supervised Learning: regression & classification
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Unsupervised Learning: clustering
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Neural networks & Deep learning
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  And much much more...
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>ML in JavaScript Ecosystem</Heading>
          </Slide>
          <Slide>
            <Heading>
              Short list of ML libraries
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Machine learning tools in JavaScript (mljs)
                </ListItem>
              </Appear>
               <Appear>
                <ListItem>
                  NPM packages, e.g. classifier, natural, etc.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  ConvNetJS
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Brain.js
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>Classification</Heading>
            <List>
              <ListItem><Link>https://github.com/mljs/ml</Link></ListItem>
              <ListItem><Link>https://github.com/ttezel/bayes</Link></ListItem>
              <ListItem><Link>https://github.com/harthur/classifier</Link></ListItem>
              <ListItem><Link>https://github.com/NaturalNode/natural</Link></ListItem>
              <ListItem><Link>https://github.com/lagodiuk/decision-tree-js</Link></ListItem>
              <ListItem><Link>https://github.com/karpathy/forestjs</Link></ListItem>
            </List>
          </Slide>
          <Slide note="Switch to Atom and show example in real time">
            <Heading>Naive Bayes Example</Heading>
          </Slide>
          <Slide note="Switch to Atom and show example in real time">
            <Heading>Random Forest Example</Heading>
          </Slide>
          <Slide>
            <Heading>Clustering</Heading>
            <List>
              <ListItem><Link>https://github.com/mljs/kmeans</Link></ListItem>
              <ListItem><Link>https://github.com/emilbayes/kMeans.js</Link></ListItem>
              <ListItem><Link>https://github.com/uhho/density-clustering</Link></ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>Clustering Example</Heading>
          </Slide>
          <Slide>
            <Heading>Neural Networks</Heading>
            <List>
              <ListItem><Link>https://github.com/cazala/synaptic</Link></ListItem>
              <ListItem><Link>https://github.com/stevenmiller888/mind</Link></ListItem>
              <ListItem><Link>https://github.com/harthur/brain (unmaintained)  // TODO: add convnet </Link></ListItem>
            </List>
          </Slide>
           <Slide>
            <Heading>Brain.js</Heading>
            <List>
              <Appear>
                <ListItem>
                  TODO TODO TODO
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>Brain JS Example</Heading>
          </Slide>
          <Slide>
            <Heading>Use Trained Networks</Heading>
          </Slide>
          <Slide>
            <Heading>ConvNetJS</Heading>
            <List>
              <Appear>
                <ListItem>
                  Created by Standford engineers
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>ConvNet Network Example</Heading>
          </Slide>
          <Slide>
            <Heading>Trainers Example</Heading>
          </Slide>
          <Slide>
            <Heading>TensorFlow</Heading>
            <Text>// TODO: Add slide with packages</Text>
          </Slide>
          <Slide>
            <Heading>Demo</Heading>
          </Slide>
          <Slide>
            <Heading>ADD INFO ABOUT DEMO</Heading>
          </Slide>
          <Slide>
            <Heading>Thank you! @.....</Heading>
          </Slide>
          <Slide>
            <Heading>references</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
