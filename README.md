### Como usar ?

```ts
type Output = Either<{ error: string }, { message: string }>;

const divide = (value: number, by: number): Output => {
  if (by === 0) {
    return Result.failure({ error: "Divisão por zero" });
  }

  return Result.success({ message: `Resultado: ${value / by}` });
};

if (divide(10, 0).hasError) {
  console.log(result.value.error);
} else {
  console.log(result.value.message);
}
```
