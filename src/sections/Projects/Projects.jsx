import styles from './ProjectsStyles.module.css';
import foodie from '../../assets/Foodie.png';
import roastery from '../../assets/Roastery.png';
import blogging from '../../assets/Blogging.png';
import quanlynhansu from '../../assets/quanly.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={foodie}
          link="https://github.com/xuanviet73/Foodie"
          h3="Foodie"
          p="Find food location website"
        />
        <ProjectCard
          src={roastery}
          link="https://github.com/xuanviet73/Roastery_Coffee"
          h3="Khang Roastery"
          p="Coffee shop website"
        />
        <ProjectCard
          src={blogging}
          link="https://github.com/xuanviet73/Blogging-Website"
          h3="Tay Nguyen Blog"
          p="Blogging website"
        />
        <ProjectCard
          src={quanlynhansu}
          link="https://github.com/xuanviet73/QuanLyNhanSu"
          h3="Quan ly nhan su"
          p="Human Resource Management"
        />
      </div>
    </section>
  );
}

export default Projects;
