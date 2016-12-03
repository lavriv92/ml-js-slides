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
  Text,
  Table,
  TableHeaderItem,
  TableRow,
  TableItem
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
  secondary: "#ddd",
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
            <Heading margin="0 0 50px 0">Agenda</Heading>
            <List margin="0 0 0 200px">
              <ListItem>Reasoning for JS</ListItem>
              <ListItem>Classification & Regression</ListItem>
              <ListItem>Clustering</ListItem>
              <ListItem>Neural Networks</ListItem>
              <ListItem>Demo</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading fit size={6} textColor="white">ML in Another Communities</Heading>
          </Slide>
          <Slide>
            <List >
              <Appear>
                <ListItem textSize="50" fit>
                  Python (ScikitLearn, TensorFlow, etc.) and R are very mature
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="50" fit>
                  Java (Weka, Apache Spark, H20, etc.) try to keep up
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <List margin="0 auto">
              <Appear>
                <ListItem textSize="50">
                  JS community can use ML to make more intelligent solutions
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="50">
                  JS community can stick with a new trends
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
              <Heading margin="0 0 50px 0">Why Use JS?</Heading>
              <List margin="0 0 0 100px">
                <ListItem>Dont want to add new technologies to JS stack</ListItem>
                <ListItem>Dont need to learn Python, R, Java, etc.</ListItem>
                <ListItem>Can make predictions in a browser</ListItem>
              </List>
          </Slide>
          <Slide>
            <Heading fit size={5} textColor="white">ML Use Cases for JS developers</Heading>
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
                  Predict user-specific UI elements
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="50">
                  Extract data laws using only JavaScript
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>
              ML in Few Slides :)
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
            <Heading margin="0 0 20px 0">Classification</Heading>
            <Image src={require('../assets/classification.jpg')} />
          </Slide>
          <Slide>
            <Heading margin="0 0 50px 0">Regression</Heading>
            <Image src={require('../assets/regression.jpg')} />
          </Slide>
          <Slide note="Switch to Atom and show example in real time">
            <Heading fit size={5} textColor="white">Naive Bayes Example</Heading>
          </Slide>
          <Slide note="Switch to Atom and show example in real time">
            <Heading fit size={6} textColor="white">Random Forest Example</Heading>
          </Slide>
          <Slide>
            <Heading fit size={4} textColor="white" margin="0 0 50px 0">Classification libraries</Heading>
            <Table>
              <TableRow border="0 0 2px solid #fff">
                <TableHeaderItem></TableHeaderItem>
                <TableHeaderItem><Text margin="0 20px 20px 20px" textColor="white">Browser</Text></TableHeaderItem>
                <TableHeaderItem><Text margin="0 20px 20px 20px" textColor="white">node</Text></TableHeaderItem>
                <TableHeaderItem><Text margin="0 20px 20px 20px" textColor="white">Github link</Text></TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>Ml tools</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem><Link href="https://github.com/mljs/ml" textColor="white">mljs/ml</Link></TableItem>
              </TableRow>
              <TableRow>
                <TableItem>bayes</TableItem>
                <TableItem>No</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem><Link href="https://github.com/ttezel/bayes" textColor="white">ttezel/bayes</Link></TableItem>
              </TableRow>
              <TableRow>
                <TableItem>classifier</TableItem>
                <TableItem>No</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem><Link href="https://github.com/harthur/classifier" textColor="white">harthur/classifier</Link></TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide>
            <Heading fit size={4} textColor="white" margin="0 0 50px 0">Classification libraries Pt.2</Heading>
            <Table>
            <TableRow border="0 0 2px solid #fff">
              <TableHeaderItem></TableHeaderItem>
              <TableHeaderItem><Text margin="0 20px 20px 20px" textColor="white">Browser</Text></TableHeaderItem>
              <TableHeaderItem><Text margin="0 20px 20px 20px" textColor="white">node</Text></TableHeaderItem>
              <TableHeaderItem><Text margin="0 20px 20px 20px" textColor="white">Github link</Text></TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem>decision-tree.js</TableItem>
              <TableItem>Yes</TableItem>
              <TableItem>Yes</TableItem>
              <TableItem><Link href="https://github.com/lagodiuk/decision-tree.js" textColor="white">lagodiuk/decision-tree-js</Link></TableItem>
            </TableRow>
            <TableRow>
              <TableItem>forest.js</TableItem>
              <TableItem>Yes</TableItem>
              <TableItem>Yes</TableItem>
              <TableItem><Link href="https://github.com/karpathy/forestjs" textColor="white">karpathy/forestjs</Link></TableItem>
            </TableRow>
            </Table>
          </Slide>
          <Slide>
            <Heading margin="0 0 50px 0">Clusterization</Heading>
            <Image src={require('../assets/clustering.jpg')} />
          </Slide>
          <Slide>
            <Heading fit size={6} textColor="white">Clusterization Example</Heading>
          </Slide>
          <Slide>
            <Heading fit size={4} textColor="white" margin="0 auto 50px auto">Clusterization libraries</Heading>
            <Table>
              <TableRow border="0 0 2px solid #fff">
                <TableHeaderItem></TableHeaderItem>
                <TableHeaderItem><Text margin="0 20px 20px 20px" textColor="white">Browser</Text></TableHeaderItem>
                <TableHeaderItem><Text margin="0 20px 20px 20px" textColor="white">npm</Text></TableHeaderItem>
                <TableHeaderItem><Text margin="0 20px 20px 20px" textColor="white">Github link</Text></TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>kmeans</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem><Link href="https://github.com/mljs/kmeans" textColor="white">mljs/kmeans</Link></TableItem>
              </TableRow>
              <TableRow>
                <TableItem>kMeans.js</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem><Link href="https://github.com/emilbayes/kMeans.js" textColor="white">emilbayes/kMeans.js</Link></TableItem>
              </TableRow>
              <TableRow>
                <TableItem>uhho/density-clustering</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem><Link href="https://github.com/uhho/density-clustering" textColor="white">uhho/density-clustering</Link></TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide>
            <Heading margin="0 auto 50px auto">Neural networks</Heading>
            <Image src={require('../assets/neural_net.jpeg')} />
          </Slide>
          <Slide>
            <Heading fit size={4} textColor="white">Brain JS Example</Heading>
          </Slide>
          <Slide>
            <Heading fit size={6} textColor="white">Example of using a Trained Network with Brain.js</Heading>
          </Slide>
          <Slide>
            <Heading fit size={4} textColor="white">ConvNet Network Example</Heading>
          </Slide>
          <Slide>
            <Heading fit size={5} textColor="white" margin="0 auto 50px auto">Neural networks libraries</Heading>
            <Table>
              <TableRow>
                <TableHeaderItem></TableHeaderItem>
                <TableHeaderItem><Text margin="0 20px 0 20px" textColor="white">Browser</Text></TableHeaderItem>
                <TableHeaderItem><Text margin="0 20px 0 20px" textColor="white">node</Text></TableHeaderItem>
                <TableHeaderItem><Text margin="0 20px 0 20px" textColor="white">Github</Text></TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>Synaptic</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem>No</TableItem>
                <TableItem><Link href="https://github.com/cazala/synaptic" textColor="white">cazala/synaptic</Link></TableItem>
              </TableRow>
              <TableRow>
                <TableItem>ConvNetJS</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem><Link href="https://github.com/karpathy/convnetjs" textColor="white">karpathy/convnetjs</Link></TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Brain.js</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem>Yes</TableItem>
                <TableItem><Link href="https://github.com/harthur/brain" textColor="white">harthur/brain</Link></TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide>
            <Heading>TensorFlow</Heading>
            <Link textSize="30">https://github.com/nikhilk/node-tensorflow</Link>
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
            <Heading fit size={5} textColor="white">Demo: Realtime spam checker</Heading>
          </Slide>
          <Slide>
            <Heading margin="0 0 50px 0">Thank you!</Heading>
            <Text textColor="white">Twitter: @ilavriv</Text>
            <Text textColor="white">GitHub: lavriv92</Text>

            <Link href="https://github.com/lavriv92/morning-lohika-demo.git" textColor="white">Demo: https://github.com/lavriv92/morning-lohika-demo.git</Link>
            <Link href="https://lavriv92.github.io/ml-js-slides/#/?_k=jqvzrj" textColor="white">Slides: https://lavriv92.github.io/ml-js-slides/#/?_k=jqvzrj</Link>
          </Slide>
          <Slide>
            <Heading size={6} textColor="white">References</Heading>
            <List>
              <ListItem><Link>https://github.com/mljs/ml</Link></ListItem>
              <ListItem><Link>https://github.com/ttezel/bayes</Link></ListItem>
              <ListItem><Link>https://github.com/harthur/classifier</Link></ListItem>
              <ListItem><Link>https://github.com/NaturalNode/natural</Link></ListItem>
              <ListItem><Link>https://github.com/lagodiuk/decision-tree-js</Link></ListItem>
              <ListItem><Link>https://github.com/karpathy/forestjs</Link></ListItem>
              <ListItem><Link>https://github.com/uhho/density-clustering</Link></ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={6} textColor="white">References pt. 2</Heading>
            <List>
              <ListItem><Link>https://github.com/cazala/synaptic</Link></ListItem>
              <ListItem><Link>https://github.com/stevenmiller888/mind</Link></ListItem>
              <ListItem><Link>https://github.com/karpathy/convnetjs</Link></ListItem>
              <ListItem><Link>https://github.com/harthur/brain (unmaintained)</Link></ListItem>
              <ListItem><Link>https://github.com/mljs/kmeans</Link></ListItem>
              <ListItem><Link>https://github.com/emilbayes/kMeans.js</Link></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
