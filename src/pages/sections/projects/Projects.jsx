import './Projects.css';
import Card from '../../../components/molecules/card/Card';

const projects = [
  {
    period: 'Desktop App · Networking',
    field: 'Packet Sniffer Application',
    place: 'Electron · JavaScript · Python · tcpdump',
    description:
      'A GUI-based desktop app for capturing and analyzing live network packets. Built with Electron for the frontend and Python for packet capture, featuring real-time display, interface selection, filtering, and export to JSON or PCAP.',
    repoUrl: 'https://github.com/Poyetnyax/Packet_Sniffer_App',
  },
  {
    period: 'Web App · Security',
    field: 'Cryptography Encrypt & Decrypt',
    place: 'Python · Web',
    description:
      'A browser-based cryptography tool where users choose an encryption or decryption algorithm, then process their text through a guided workflow. Supports multiple algorithms for secure text transformation.',
    repoUrl: 'https://github.com/Poyetnyax/Cryptography-encrypt-decrypt',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects__container">
      <h1 className="projects__title">Projects</h1>
      <div className="projects__cards">
        {projects.map((project) => (
          <Card key={project.field} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
