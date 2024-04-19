import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.mainContentArea}>
      <div className={styles.primaryContent}>
        <img
          className={styles.primaryContentChild}
          loading="lazy"
          alt=""
          src="/group-18294.svg"
        />
        <div className={styles.labelContainer}>
          <h1 className={styles.label}>Obank.</h1>
        </div>
      </div>
      <div className={styles.secondaryContentArea}>
        <div className={styles.labelParent}>
          <h1 className={styles.label1}>
            <p className={styles.walletApp}>Wallet App</p>
            <p className={styles.uiKit}>UI Kit</p>
          </h1>
          <img
            className={styles.ratingStarIcon}
            loading="lazy"
            alt=""
            src="/star-22.svg"
          />
        </div>
        <div className={styles.featureChecklist}>
          <div className={styles.checklistGrid}>
            <div className={styles.checklistItemRow}>
              <img
                className={styles.checkIcon}
                loading="lazy"
                alt=""
                src="/check.svg"
              />
            </div>
            <div className={styles.featureDescriptionRow}>
              <div className={styles.premadeScreen}>65+ Premade Screen</div>
            </div>
          </div>
          <div className={styles.checklistGrid1}>
            <div className={styles.checkWrapper}>
              <img
                className={styles.checkIcon1}
                loading="lazy"
                alt=""
                src="/check.svg"
              />
            </div>
            <div className={styles.neatlyOrganizedLayerWrapper}>
              <div
                className={styles.neatlyOrganized}
              >{`Neatly & Organized Layer`}</div>
            </div>
          </div>
          <div className={styles.checklistGrid2}>
            <div className={styles.checkContainer}>
              <img
                className={styles.checkIcon2}
                loading="lazy"
                alt=""
                src="/check.svg"
              />
            </div>
            <div className={styles.designSystemIncludedWrapper}>
              <div className={styles.designSystemIncluded}>
                Design System Included
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-109.svg"
        />
        <button className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <b className={styles.lightDark}>{`Light & Dark Theme`}</b>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
