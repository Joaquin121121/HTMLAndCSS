palabra = "jijijija"
for i in palabra
    if not (i = 0 or i = len(palabra))
        palabra[i] = "*"

echo(palabra)