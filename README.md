#Proyecto
## Actualizar dependencias de node
```
npm install # o npm i
```


# Comandos para GIT
- Iniciar un repositorio nuevo
```
git init
```
- Agregar al INDEX (working directory)
```
git add . 
```

- Agregar al HEAD (Cabecera)

```
git commit -m "Proyecto inicial del 2021-12-03"
```

- Relacionar el repositorio local con el remoto, git remote -v (ver la relacion del repositorio local con el remoto) (es para crear una rama con el nombre 'main' git branch -M main)
```
git remote add origin https://github.com/rudolfPaco/backend-tienda-node.git
```
- Subir los cambios del proyecto (master, el nombre de la rama)
```
git push -u origin master
```
