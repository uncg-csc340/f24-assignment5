<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Animal List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<#include "./fragments/navigation.ftlh">
<div class="album py-5 bg-body-tertiary">

    <div class="container">
        <a href="/animals/createForm" class="btn btn-primary">New Animal</a>
        <h2>Animal List: Card View</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
         <#list animalList as animal>
            <div class="col">
                <div class="card shadow-sm">
                    <div class="card-header">
                    ${animal.name} (${animal.scientificName})
                    </div>
                    <div class="card-body">
                        <p >ID: ${animal.animalId}</p>
                        <p class="card-text" >${animal.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="/animals/${animal.animalId}"
                                   class="btn btn-sm btn-outline-secondary">View</a>
                                <a href="/animals/update/${animal.animalId}"
                                   class="btn btn-sm btn-outline-secondary">Edit</a>
                            </div>
                            <a href="/animals/delete/${animal.animalId}"
                               class="btn btn-sm btn-outline-danger">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
             </#list>
        </div>
        <hr>
        <h2>Animal List: Table View</h2>
        <table class="table striped-table">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Scientific Name</th>
                <th>Habitat</th>
                <th>Actions</th>
            </tr>
            <#list animalList as animal>
            <tr>
                <td><a href="/animals/${animal.animalId}"></a>${animal.animalId}</td>
                <td> ${animal.name}</td>
                <td >${animal.scientificName}</td>
                <td >${animal.habitat}</td>
                <td><a href="/animals/${animal.animalId}" class="btn btn-sm btn-outline-secondary">View</a>
                    <a href="/animals/update/${animal.animalId}" class="btn btn-sm btn-outline-secondary">Edit</a>
                    <a href="/animals/delete/${animal.animalId}"
                       class="btn btn-sm btn-outline-danger">Delete</a>
                </td>
            </tr>
            </#list>
        </table>
    </div>
</div>
</body>
</html>