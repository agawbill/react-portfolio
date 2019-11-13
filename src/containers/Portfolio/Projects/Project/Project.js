import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../../../store/actions";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import Gallery from "./Gallery/Gallery";
import styles from "./Project.module.css";
import ShareIcons from "../../../../components/UI/ShareIcons/ShareIcons";
import Header from "../../../../components/UI/Header/Header";
import { ResponsiveEmbed } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const Project = props => {
  const project = useSelector(state => state.projects.currentProject);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(`${props.location.search}`);
    const id = searchParams.get("id");
    if (!id) {
      props.history.push("/");
    }

    dispatch(actions.findProject(id));

    return () => dispatch(actions.resetProject());
  }, [dispatch, props.location.search, props.history, project]);

  useEffect(() => {
    if (project) {
      document.title = project.title;
    }
  }, [project]);

  let projectBody = <Spinner />;

  if (project) {
    const date = new Date(project.created_at);
    projectBody = (
      <div className={styles.Project}>
        <Header type="projects" title={" " + project.title} />
        <a href={project.projectURL}>Click Here to Visit</a>
        <ShareIcons size="lg" />
        <span className={styles.DateName}>
          By <a href={`mailto:${project.email}`}>{project.user.username}</a> on{" "}
          {date.toDateString()} at {date.toLocaleTimeString()}
        </span>
        <hr />
        <ResponsiveEmbed aspectRatio="21by9" style={{ marginBottom: "15px" }}>
          <iframe src={project.videoURL} title="demo-video" />
        </ResponsiveEmbed>
        <div className={styles.ProjectContainer}>
          <div className={styles.ProjectGallery}>
            <b>Click to Enlarge</b>
            <Gallery images={project.images} />
          </div>
          <div className={styles.ProjectDescription}>
            <ReactMarkdown source={project.body} />
          </div>
        </div>
      </div>
    );
  }

  return <>{projectBody}</>;
};

export default Project;
