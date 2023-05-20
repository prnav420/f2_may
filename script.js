const employees = [
  { id: 1, name: "John", age: "18", profession: "developer" },
  { id: 2, name: "Jack", age: "20", profession: "developer" },
  { id: 3, name: "Karen", age: "19", profession: "admin" }
];

function renderEmployeeList(employeeList) {
  const employeeListContainer = document.getElementById("employee-list");
  employeeListContainer.innerHTML = "";

  employeeList.forEach((employee) => {
    const card = document.createElement("div");
    card.classList.add("employee-card");
    card.innerHTML = `<p><strong>Name:</strong> ${employee.name}</p>
                      <p><strong>Age:</strong> ${employee.age}</p>
                      <p><strong>Profession:</strong> ${employee.profession}</p>`;
    employeeListContainer.appendChild(card);
  });
}

function filterEmployeesByProfession() {
  const profession = document.getElementById("profession-select").value;

  if (profession === "") {
    alert("Please select a profession before clicking the Filter button.");
    return;
  }

  const filteredEmployees = employees.filter(
    (employee) => employee.profession === profession
  );
  renderEmployeeList(filteredEmployees);
}

function addEmployee() {
  const name = document.getElementById("name-input").value;
  const age = document.getElementById("age-input").value;
  const profession = document.getElementById("profession-input").value;

  if (name === "" || age === "" || profession === "") {
    alert("Please fill in all the fields before clicking the Add button.");
    return;
  }

  const newEmployee = { id: employees.length + 1, name, age, profession };
  employees.push(newEmployee);

  renderEmployeeList(employees);

  // Clear input fields after adding an employee
  document.getElementById("name-input").value = "";
  document.getElementById("age-input").value = "";
  document.getElementById("profession-input").value = "";
}

// Event listeners
document
  .getElementById("filter-button")
  .addEventListener("click", filterEmployeesByProfession);
document.getElementById("add-button").addEventListener("click", addEmployee);

// Initial rendering
renderEmployeeList(employees);
