<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Animal Update</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<#include "./fragments/navigation.ftlh">
<div class="container">
    <h1>Update: ${animal.name}</h1>
    <form action="/animals/update" method="post">
        ID: <input type="text" class="form-control" id="animalId" name="animalId" value="${animal.animalId}"
                   readonly>
        Name: <input type="text" class="form-control" id="name" name="name" value="${animal.name}">
        Scientific Name: <input type="text" class="form-control" id="scientificName" name="scientificName"
                                value="${animal.scientificName}">
        Species: <input type="text" class="form-control" id="species" name="species" value="${animal.species}">
        Habitat: <input type="text" class="form-control" id="habitat" name="habitat"
                        value="${animal.habitat}">
        Description: <textarea class="form-control" id="description" rows="3" name="description">${animal.description}</textarea>
        <button type="submit" class="btn btn-primary">Save</button>
    </form>
</div>
</body>
</html>