import { ButtonMinimal, Heading, Slat, View } from "@go1d/go1d";
import IconCalendar from "@go1d/go1d/build/components/Icons/Calendar";
import IconHeart from "@go1d/go1d/build/components/Icons/Heart";
import IconVideo from "@go1d/go1d/build/components/Icons/Video";
import SlatImage from "@go1d/go1d/build/components/Slat/SlatImage";
import Layout from "~/components/layout";

export default function Content() {
  const data = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      image: "https://source.unsplash.com/random/800x600",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      image: "https://source.unsplash.com/random/800x600?sig=1",
    },
  ];

  return (
    <Layout paddingY={6}>
      <Heading semanticElement="h2" visualHeadingLevel="Heading 2">
        Content List
      </Heading>

      <View
        gap={4}
        backgroundColor="background"
        padding={4}
        borderRadius={4}
        border={1}
        borderColor="delicate"
      >
        {data.map((item) => (
          <Slat
            key={item.id}
            id={item.id}
            onClick={() => {
              window.alert("You clicked this card.");
            }}
          >
            <SlatImage alt="Alternative text" src={item.image} />
            <Slat.Content>
              <Slat.Title visualHeadingLevel="Heading 4">
                {item.title}
              </Slat.Title>
              <Slat.Description>{item.description}</Slat.Description>
              <Slat.Meta>
                <Slat.MetaItem>
                  <IconVideo />
                  Video
                </Slat.MetaItem>
                <Slat.MetaItem>
                  <IconCalendar />
                  30 mins
                </Slat.MetaItem>
              </Slat.Meta>
            </Slat.Content>
            <Slat.Actions>
              <ButtonMinimal icon={IconHeart} />
            </Slat.Actions>
          </Slat>
        ))}
      </View>
    </Layout>
  );
}
