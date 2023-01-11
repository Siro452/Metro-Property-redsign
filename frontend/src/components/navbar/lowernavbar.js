import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function LowerNavBar() {
  return (
    <div className={styles.lowerheader}>
      <Link id={styles.home}>HOME</Link>

      <Dropdown
        autoClose={true}
        as={ButtonGroup}
        className={styles.subnav}
        navbar="true"
        drop="down-centered"
      >
        <Dropdown.Toggle className={styles.subnavbtn}>
          FOR OWNERS
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.subnav_content}>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="1">
            Why Choose Us?
          </Dropdown.Item>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="2">
            Our Services
          </Dropdown.Item>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="3">
            Blog
          </Dropdown.Item>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="4">
            Owner Login
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        autoClose={true}
        as={ButtonGroup}
        className={styles.subnav}
        navbar="true"
        drop="down-centered"
      >
        <Dropdown.Toggle className={styles.subnavbtn}>
          FOR TENANTS
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.subnav_content}>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="1">
            Renting With Us
          </Dropdown.Item>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="2">
            Properties to Rent
          </Dropdown.Item>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="3">
            Blog
          </Dropdown.Item>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="4">
            Tenancy Application
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        autoClose={true}
        as={ButtonGroup}
        className={styles.subnav}
        navbar="true"
        drop="down-centered"
      >
        <Dropdown.Toggle className={styles.subnavbtn}>ABOUT US</Dropdown.Toggle>
        <Dropdown.Menu className={styles.subnav_content}>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="1">
            Our Services
          </Dropdown.Item>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="2">
            Meet the Team
          </Dropdown.Item>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="3">
            Careers
          </Dropdown.Item>
          <Dropdown.Item className={styles.subnav_content_item} eventKey="4">
            Gallery
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
