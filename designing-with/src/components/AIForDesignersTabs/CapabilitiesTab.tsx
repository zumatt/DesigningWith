import AiTable from "../AITable";
import { TabElement } from "../TabsDisplay";
import TextHighlight from "../TextHighlight";

const CapabilitiesTab: TabElement = {
        title: "(b) AI capabilities",
        mobileTitle: "(b)",
        elements: (
          <div className="flex flex-col gap-2">
            <div className="bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white px-4 py-6 rounded-b-2xl">
       
              <h2>
                A set of 12 AI capabilities structuring a basic AI literacy
                for designers
              </h2>
              <div className="flex flex-col md:flex-row justify-between md:gap-[14px] mt-[50px]">
                <p className="flex-1">
                  To use artificial intelligence, designers need first to
                  comprehend its potential, functionality, and limitations.
                  Basic AI literacy empowers designers to integrate these
                  technologies into the design process, optimising outcomes
                  and establishing a synergistic relationship between human
                  intelligence and artificial intelligence.
                </p>
                <p className="flex-1">
                  To introduce AI literacy and support designers, we have
                  defined a list of AI capabilities that represent the
                  fundamental functionality of AI systems. For each
                  capability, a theoretical description, structured according
                  to the principles of{" "}
                  <TextHighlight type="input">input</TextHighlight> and{" "}
                  <TextHighlight type="output">output</TextHighlight> data,
                  and a practical example are provided.
                </p>
              </div>
              </div>
            </div>),
            extra: (
            <div className="flex flex-col w-full gap-2">
              <p className=" bg-white rounded-lg p-4 md:hidden">
                AI Capability
              </p>
              <div className="hidden md:flex flex-col md:w-full">
                <AiTable
                  aiCap="AI Capability"
                  desc="Description"
                  example="Example"
                />
              </div>
              <AiTable
                aiCap="Classify"
                desc={
                  <>
                    Identifying by or dividing data into{" "}
                    <TextHighlight type="output">classes</TextHighlight>{" "}
                    based on{" "}
                    <TextHighlight type="input">
                      similar features
                    </TextHighlight>
                  </>
                }
                example={
                  <>
                    Classify an item in{" "}
                    <TextHighlight type="input">a picture</TextHighlight>{" "}
                    as <TextHighlight type="output">a car</TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Collect"
                desc={
                  <>
                    Gathering{" "}
                    <TextHighlight type="output">data</TextHighlight> from
                    physical or digital environments driven by{" "}
                    <TextHighlight type="input">
                      research interests
                    </TextHighlight>
                  </>
                }
                example={
                  <>
                    Collecting{" "}
                    <TextHighlight type="output">images</TextHighlight> from
                    an{" "}
                    <TextHighlight type="input">
                      online website
                    </TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Debug"
                desc={
                  <>
                    Finding and fixing{" "}
                    <TextHighlight type="output">errors</TextHighlight> in{" "}
                    <TextHighlight type="input">given data</TextHighlight>
                  </>
                }
                example={
                  <>
                    Finding{" "}
                    <TextHighlight type="output">errors</TextHighlight> in a{" "}
                    <TextHighlight type="input">
                      string of code
                    </TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Generate"
                desc={
                  <>
                    Creating{" "}
                    <TextHighlight type="output">new data</TextHighlight> or
                    contents based on{" "}
                    <TextHighlight type="input">
                      given instructions
                    </TextHighlight>{" "}
                    or{" "}
                    <TextHighlight type="input">parameters</TextHighlight>
                  </>
                }
                example={
                  <>
                    Generate an{" "}
                    <TextHighlight type="output">image</TextHighlight> from
                    a{" "}
                    <TextHighlight type="input">text prompt</TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Optimise"
                desc={
                  <>
                    Improving{" "}
                    <TextHighlight type="input">data</TextHighlight>{" "}
                    <TextHighlight type="output">quality</TextHighlight> and{" "}
                    <TextHighlight type="output">performance</TextHighlight>
                  </>
                }
                example={
                  <>
                    Optimise the{" "}
                    <TextHighlight type="output">
                      pixel resolution
                    </TextHighlight>{" "}
                    of an <TextHighlight type="input">image</TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Rank"
                desc={
                  <>
                    Organising{" "}
                    <TextHighlight type="output">hierarchies</TextHighlight>{" "}
                    based on{" "}
                    <TextHighlight type="input">
                      data relevance within a given context
                    </TextHighlight>
                  </>
                }
                example={
                  <>
                    Classification of{" "}
                    <TextHighlight type="output">words</TextHighlight>{" "}
                    according to their use in a{" "}
                    <TextHighlight type="input">text</TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Recognise"
                desc={
                  <>
                    Detecting and identifying{" "}
                    <TextHighlight type="output">patterns</TextHighlight> in
                    data based on{" "}
                    <TextHighlight type="input">
                      given instruction or previous knowledge
                    </TextHighlight>
                  </>
                }
                example={
                  <>
                    Detect the{" "}
                    <TextHighlight type="output">
                      presence of cars
                    </TextHighlight>{" "}
                    in a <TextHighlight type="input">video</TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Recommend"
                desc={
                  <>
                    Suggesting{" "}
                    <TextHighlight type="output">contents</TextHighlight>{" "}
                    based on{" "}
                    <TextHighlight type="input">
                      past behaviours, preferences,
                    </TextHighlight>{" "}
                    or{" "}
                    <TextHighlight type="input">
                      relevance within a given context
                    </TextHighlight>
                  </>
                }
                example={
                  <>
                    Recommend a{" "}
                    <TextHighlight type="output">colour</TextHighlight>{" "}
                    starting from{" "}
                    <TextHighlight type="input">
                      existing palette
                    </TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Summarise"
                desc={
                  <>
                    Selecting and disclosing{" "}
                    <TextHighlight type="output">
                      relevant data
                    </TextHighlight>{" "}
                    with the{" "}
                    <TextHighlight type="input">
                      overall meaning
                    </TextHighlight>
                  </>
                }
                example={
                  <>
                    Summarize a{" "}
                    <TextHighlight type="output">text</TextHighlight> in{" "}
                    <TextHighlight type="input">
                      bullet points
                    </TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Test"
                desc={
                  <>
                    Evaluating the{" "}
                    <TextHighlight type="output">
                      performance and functionality
                    </TextHighlight>{" "}
                    based on{" "}
                    <TextHighlight type="input">parameters</TextHighlight>
                  </>
                }
                example={
                  <>
                    Test the{" "}
                    <TextHighlight type="output">performance</TextHighlight>{" "}
                    of the{" "}
                    <TextHighlight type="input">SEO website.</TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Translate"
                desc={
                  <>
                    Transforming (existing) data from{" "}
                    <TextHighlight type="input">one domain</TextHighlight>{" "}
                    to <TextHighlight type="output">another</TextHighlight>{" "}
                    preserving context meaning
                  </>
                }
                example={
                  <>
                    Translate a{" "}
                    <TextHighlight type="input">text</TextHighlight> from{" "}
                    <TextHighlight type="input">English</TextHighlight> to{" "}
                    <TextHighlight type="output">Spanish</TextHighlight>
                  </>
                }
              />
              <AiTable
                aiCap="Visualise"
                desc={
                  <>
                    Transforming{" "}
                    <TextHighlight type="input">data</TextHighlight> into{" "}
                    <TextHighlight type="output">
                      visual outputs
                    </TextHighlight>{" "}
                    useful for exploration or explanation.
                  </>
                }
                example={
                  <>
                    Visualising a{" "}
                    <TextHighlight type="input">table</TextHighlight> in a{" "}
                    <TextHighlight type="output">graph</TextHighlight> (e.g.
                    bar charts)
                  </>
                }
              />
            </div>
        ),
      }

export default CapabilitiesTab;