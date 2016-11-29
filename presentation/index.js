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
  primary: "#4CAF50",
  secondary: "#dddddd",
  third: '#3F51B5',
  code: '#2d2d2d'
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
            <Heading>Ml in another communities</Heading>
          </Slide>
          <Slide>
            <List>
              <Appear>
                <ListItem>
                  Python and R is awesome but it’s not only for this
                  languages.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Java and Ruby guys are already talking about this
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>Any other motivation?</Heading>
          </Slide>
          <Slide bgColor="third">
            <List>
              <Appear>
                <ListItem>
                JS is awesome, so we can use it to match more solutions
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  We have to stick with a new trends
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor="third">
            <BlockQuote>
              <Quote>How ML can help me?</Quote>
            </BlockQuote>
          </Slide>
          <Slide>
            <List>
              <Appear>
                <ListItem>
                  Image analystic
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
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
          <Slide bgColor="third">
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
            <Heading>ML toolkit</Heading>
            <List>
              <Appear>
                <ListItem>
                  Created by mljs community
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Licence MIT
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                One of the biggest implementation of machine learning tools
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="bash"
              textSize="1.8em"
              source={require("./examples/ml-install.example")}
            />
          </Slide>
          <Slide>
            <Heading>ML.Root</Heading>
            <List>
              <Appear>
                <ListItem>Array utils</ListItem>
              </Appear>
              <Appear>
                <ListItem>Bit array operations</ListItem>
              </Appear>
              <Appear>
                <ListItem>hash table</ListItem>
              </Appear>
              <Appear>
                <ListItem>matrix</ListItem>
              </Appear>
              <Appear>
                <ListItem>Pad array</ListItem>
              </Appear>
              <Appear>
                <ListItem>Regression</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>ML.Math</Heading>
            <List>
              <Appear>
                <ListItem>Distance</ListItem>
              </Appear>
              <Appear>
                <ListItem>Similarity</ListItem>
              </Appear>
              <Appear>
                <ListItem>Savitskiy goalay filter</ListItem>
              </Appear>
              <Appear>
                <ListItem>Savitskiy goalay generation</ListItem>
              </Appear>
              <Appear>
                <ListItem>Matrix</ListItem>
              </Appear>
              <Appear>
                <ListItem>Spacematrix</ListItem>
              </Appear>
              <Appear>
                <ListItem>Optimization</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>ML.Stats</Heading>
            <List>
              <Appear>
                <ListItem>Array</ListItem>
              </Appear>
              <Appear>
                <ListItem>Matrix</ListItem>
              </Appear>
              <Appear>
                <ListItem>PCA</ListItem>
              </Appear>
              <Appear>
                <ListItem>Performance</ListItem>
              </Appear>
              <Appear>
                <ListItem>BellOptimizer</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>ML.RNG</Heading>
            <List>
              <Appear>
                <ListItem>Xor shift add</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>ML.SL</Heading>
            <List>
              <Appear>
                <ListItem>Vector machines</ListItem>
              </Appear>
            </List>
            <List>
              <Appear>
                <ListItem>naive buyers</ListItem>
              </Appear>
            </List>
            <List>
              <Appear>
                <ListItem>K-nearest Neighbor</ListItem>
              </Appear>
            </List>
            <List>
              <Appear>
                <ListItem>Partial least squares</ListItem>
              </Appear>
            </List>
            <List>
              <Appear>
                <ListItem>Cross validation</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>ML.NN</Heading>
            <List>
              <Appear>
                <ListItem>Neural Networks</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>Brain</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="bash"
              textSize="1.8em"
              source={require("./examples/brain-install.example")}
            />
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
            <Heading>Volumes example</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/convnet-volume.example")}
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
            <Heading>Classifiers</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="bash"
              textSize="1.8em"
              source={require("./examples/classifiers-install.example")}
            />
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/classifier-natural.example")}
            />
          </Slide>
          <Slide>
            <Heading>Inflection</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/classifiers-inflection.example")}
            />
          </Slide>
          <Slide>
            <Heading>Naive buyers</Heading>
          </Slide>
          <Slide bgColor="code">
            <CodePane
              lang="js"
              textSize="0.9em"
              source={require("./examples/classifiers-naive.example")}
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
        </Deck>
      </Spectacle>
    );
  }
}
