import React from 'react';

function Footer({ totalTasks, completedTasks }) {
  return (
    <footer>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      {/* Add any additional information or links here */}
    </footer>
  );
}

export default Footer;
