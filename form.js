document.addEventListener('DOMContentLoaded', () => {
  const formHTML = `
    <h2>Fill This Form To Get Blood</h2>
    <form action="https://formspree.io/f/mwpobvdg" method="POST">
      <label for="name">Patient Name</label>
      <input type="text" id="name" name="name" style="text-transform: uppercase;" required>

      <label for="bloodGroup">Blood Group:</label>
      <select id="bloodGroup" name="bloodGroup" required>
        <option value="">-- Select Blood Group --</option>
        <option value="A+">A+</option>
        <option value="A-">A−</option>
        <option value="B+">B+</option>
        <option value="B-">B−</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB−</option>
        <option value="O+">O+</option>
        <option value="O-">O−</option>
      </select>

      <label for="units">Required Units</label>
      <input type="number" id="units" name="units" min="1" required>

      <label for="hospital">Hospital Name</label>
      <input type="text" id="hospital" name="hospital" required>

      <label for="location">Hospital Location</label>
      <input type="text" id="location" name="location" required>

      <label for="contact">Contact Number</label>
      <input type="tel" id="contact" name="contact" required>

      <label for="message">Additional Information</label>
      <textarea id="message" name="message" rows="4"></textarea>

      <button type="submit">Send</button>
    </form>
  `;

  document.getElementById('form').innerHTML = formHTML;
});
