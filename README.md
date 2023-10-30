[![.github/workflows/publish.yml](https://github.com/mpgxc/either/actions/workflows/publish.yml/badge.svg)](https://github.com/mpgxc/either/actions/workflows/publish.yml)

### Como usar ?

```ts
type Output = Result<{ error: string }, { message: string }>;

const divide = (value: number, by: number): Output => {
  if (by === 0) {
    return Result.Err({ error: "Divisão por zero" });
  }

  return Result.Ok({ message: `Resultado: ${value / by}` });
};

const result = divide(10, 2);

if (result.isOk) {
  console.log(result.value.message);
} else {
  console.log(result.value.error);
}
```
