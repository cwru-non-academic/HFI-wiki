import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Knowledge Sharing',
    Svg: require('../../static/img/ONR-Ground-Robotics-hands.svg').default,
    description: (
      <>
        Much like our Kinova Gen2 and the UR5 sharing the cube, this wiki makes
        the sharing of HFI's knowledge base across teams possible.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/laptop-code.svg').default,
    description: (
      <>
        Why repeat the same mistakes as the last person? We know there is a lot out there
        for you to experiment and fail with. Let this wiki help you with that.
      </>
    ),
  },
  {
    title: 'Got Something for Us?',
    Svg: require('../../static/img/teamwork.svg').default,
    description: (
      <>
        Did you create something new? Did you find something missing in our wiki? 
        Let us know! We are always looking to improve our knowledge base. All we need is a <code>Readme.md</code> file.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
