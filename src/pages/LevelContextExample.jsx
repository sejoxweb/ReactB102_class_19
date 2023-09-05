import Heading from "../components/Heading";
import Section from "../components/Section";

const Post = () => {
  return <Heading>Sub-sub-heading</Heading>;
};

export default function LevelContextExample() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <div style={{ border: "2px dashed red" }}>
              <Heading>Sub-sub-heading</Heading>
              <Heading level={6}>Sub-sub-heading</Heading>
              <Section level={5}>
                <Post />
              </Section>
            </div>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
