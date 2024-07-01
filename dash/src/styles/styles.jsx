import { css } from '@emotion/css';

export const container = css`
  display: flex;
  height: 100vh;
  overflow: hidden;  // Prevent scrolling on the body when sidebar is fixed
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const sidebar = css`
  background: #2f3e46;
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d3d3d3;
  position: fixed;  // Make the sidebar fixed
  top: 0;
  left: 0;  // Fix the sidebar to the left
  bottom: 0;
  overflow-y: auto;  // Allow the sidebar to be scrollable if its content overflows
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
    position: static;  // Remove fixed positioning on smaller screens
  }
`;

export const profile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;  // Center align text
`;

export const profileImage = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const profileName = css`
  margin-top:50px;
  font-size: 1.2em;
  color: #fff;
  word-wrap: break-word;  // Ensure text wraps
  max-width: 100%;  // Prevent overflow
`;

export const navMenu = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top:50px;
`;

export const navLink = css`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #d3d3d3;
  text-decoration: none;
  font-size: 1.1em;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: #a5a58d;
    color: #2f3e46;
  }
`;

export const icon = css`
  margin-right: 10px;
`;

export const logout = css`
  margin-top: auto;
  color: #d3d3d3;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 1.1em;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: #a5a58d;
    color: #2f3e46;
  }
`;

export const content = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 250px;  // Adjust content to start after the sidebar
  // background: url('background-image.jpg') no-repeat center center/cover;
  // background-color: #bbdefb ;
  overflow-y: auto;  // Allow main content to scroll
  @media (max-width: 768px) {
    margin-left: 0;  // Reset margin on smaller screens
    flex-direction: column;
  }
`;

export const header = css`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const searchContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;  // Center align the search container
  width: 100%;
`;

export const searchInput = css`
  padding: 10px;
  width: 50%;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 60%;
    padding: 8px;
  }
`;

export const searchButton = css`
  height:100%;
  background: #2f3e46;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center; /* Corrected property name */
  margin-left: 10px;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: #a5a58d;
    color: #2f3e46;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const dashboard = css`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const welcomeMessage = css`
  font-size: 2.5em;
  color: #2f3e46;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 8px;
  @media (max-width: 768px) {
    font-size: 2em;
    padding: 15px;
  }
`;
