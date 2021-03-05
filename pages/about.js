import Meta from "../components/Common/Meta";

const About = () => {
  return (
    <div>
      <Meta title="About" />
      <hr />
      <h2>References :</h2>
      <ul>
        <li>
          <a href="https://nextjs.org/">
            <strong>NEXT.js </strong>:<br />
            The React Framework for Production
          </a>
          <br />
        </li>
        <li>
          <a href="https://github.com/opensheetmusicdisplay/opensheetmusicdisplay">
            <strong>OpenSheetMusicDisplay </strong>:<br /> OpenSheetMusicDisplay
            renders sheet music in MusicXML format in your web browser based on
            VexFlow.
          </a>
        </li>
        <li>
          <p>
            <strong>dependencies:</strong>
            <br />
            "next": "10.0.5"
            <br />
            "react": "17.0.1"
            <br />
            "react-dom": "17.0.1"
            <br />
            "opensheetmusicdisplay": "^0.9.5"
          </p>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default About;
