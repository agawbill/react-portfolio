import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as actions from "../../store/actions";
import ScrollToTop from "../../components/UI/ScrollToTop";
import Spinner from "../../components/UI/Spinner/Spinner";
import { withErrorHandler } from "../../hoc/withErrorHandler";

const Landing = React.lazy(() => import("./Landing/Landing"));
const About = React.lazy(() => import("./About/About"));
const Blog = React.lazy(() => import("./Blog/Blog"));
const BlogPost = React.lazy(() => import("./Blog/BlogPost/BlogPost"));
const Project = React.lazy(() => import("./Projects/Project/Project"));
const Projects = React.lazy(() => import("./Projects/Projects"));
const Contact = React.lazy(() => import("./Contact/Contact"));
const Resume = React.lazy(() => import("../../components/Resume/Resume"));

const Portfolio = props => {
  const loading = useSelector(state => state.content.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchContent());
  }, [dispatch]);

  let portfolioBody = null;

  if (loading) {
    portfolioBody = <Spinner />;
  } else {
    portfolioBody = (
      <>
        <ScrollToTop />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              path="/blog/:slug"
              render={props => <BlogPost {...props} />}
            />
            <Route
              path="/projects/:slug"
              render={props => <Project {...props} />}
            />
            <Route path="/about" render={props => <About {...props} />} />
            <Route path="/blog" render={props => <Blog {...props} />} />
            <Route path="/projects" render={props => <Projects {...props} />} />
            <Route path="/contact" render={props => <Contact {...props} />} />
            <Route path="/resume" render={props => <Resume {...props} />} />
            <Route path="/" render={() => <Landing />} />
          </Switch>
        </Suspense>
      </>
    );
  }

  return <>{portfolioBody}</>;
};

export default withErrorHandler(Portfolio);
