<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Animal Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<#include "./fragments/navigation.ftlh">
<div class="container">
    <h1>Animal Details: ${animal.name}</h1>
    <div class="card text-center">
        <div class="card-header"> ${animal.name} (${animal.scientificName})
        </div>
        <div class="card-body">
             <span style="float:right"> <a href="/animals/update/${animal.animalId}"
                                           class="btn btn-primary">Edit Animal</a></span>
            <h5 class="card-title">Species: ${animal.species} </h5>

            <p class="card-text" > ${animal.description}</p>
            <p>Habitat: ${animal.habitat}</p>
            <a href="/animals/delete/${animal.animalId}" class="btn btn-danger">Delete
                Animal</a>

            <a href="/animals/all" class="btn btn-primary">Go back</a>
        </div>
        <div class="card-footer text-body-secondary" >
${animal.animalId}
        </div>
    </div>
</div>

</body>
</html>