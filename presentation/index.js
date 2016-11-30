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
              <ListItem>Reasons</ListItem>
              <ListItem>Simle solutuins</ListItem>
              <ListItem>Clustering</ListItem>
              <ListItem>Neural networks</ListItem>
              <ListItem>Demo</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>Ml in another communities</Heading>
          </Slide>
          <Slide>
            <List>
              <Appear>
                <ListItem textSize="50" fit>
                  Python and R is awesome but it’s not only for this
                  languages.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="50" fit>
                  Java and Ruby guys are already talking about this
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading >Any other motivation?</Heading>
          </Slide>
          <Slide>
            <List margin="0 auto">
              <Appear>
                <ListItem textSize="50">
                  JS is awesome, so we can use it to match more solutions
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="50">
                  We have to stick with a new trends
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>How ML can help me?</Heading>
          </Slide>
          <Slide>
            <List>
              <Appear>
                <ListItem textSize="50">
                  Image analysis
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="50">
                  Better AB tests in your application
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Robot checking
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Full text search in applications
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide></Slide>
          <Slide>
            <BlockQuote>
              <Quote>Ok, I`m ready to start</Quote>
            </BlockQuote>
            <List>
              <Appear>
                <ListItem>
                  Great!!! Now you need to learn some concepts and basic algorithms.
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>
              Which i need to understand?
            </Heading>
          </Slide>
          <Slide>
            <List>
              <Appear>
                <ListItem>
                  Neural networks
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Classification algorithms
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Regression
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Data pipes
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Specified data structures
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>is It JavaScript ecosystem which helps me?</Heading>
            <List>
              <Appear>
                <ListItem>
                  Sure Ecosystem has a lot of awesome libraries which helps you.
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>
              Short list of ml libraries
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  ML toolkit
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
              <Appear>
                <ListItem>
                  classifier
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  natural
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
          <Slide>
            <Heading>Naive bayes example</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/classifiers-naive.example")}
            />
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/forest.example")}
            />
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
            <Heading>Clustering example</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/kmeans.example")}
            />
          </Slide>
          <Slide>
            <Heading>Neural networks</Heading>
            <List>
              <ListItem><Link>https://github.com/cazala/synaptic</Link></ListItem>
              <ListItem><Link>https://github.com/stevenmiller888/mind</Link></ListItem>
              <ListItem><Link>https://github.com/harthur/brain (unmaintained)</Link></ListItem>
            </List>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/brain-network.example")}
            />
          </Slide>
          <Slide>
            <Heading>Use pre trained networks</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/brain-use-network.example")}
            />
          </Slide>
          <Slide>
            <Heading>Streem network</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/brain-stream.example")}
            />
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
            <List>
              <Appear>
                <ListItem>
                  Neural networks
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Trainers
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Streming networks
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="bash"
              textSize="1.8em"
              source={require("./examples/convnet-install.example")}
            />
          </Slide>
          <Slide>
            <Heading>Convnet network</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/convnet-network.example")}
            />
          </Slide>
          <Slide>
            <Heading>Trainers</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/convnet-trainers.example")}
            />
          </Slide>
          <Slide>
            <Heading>TensorFlow</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="bash"
              textSize="1.6em"
              source={require("./examples/tensor-flow.example")}
            />
          </Slide>
          <Slide>
            <Heading>Demo</Heading>
          </Slide>
          <Slide>
            <Heading>Thank you</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
