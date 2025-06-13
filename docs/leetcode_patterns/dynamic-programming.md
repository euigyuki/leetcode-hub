# Dynamic Programming

Dynamic Programming (DP) is a powerful optimization technique used to solve problems with **overlapping subproblems** and **optimal substructure**.

---

## 🧠 Key Concepts

- **Memoization**: Top-down recursion with caching
- **Tabulation**: Bottom-up iteration
- **State definition**: Clearly define what each `dp[i]` represents
- **Transition relation**: Determine how current state builds from previous ones

---

## 🧰 Common Types of DP

| Type                   | Examples                                      |
|------------------------|-----------------------------------------------|
| 1D DP                  | Fibonacci, Climbing Stairs                    |
| 2D DP (grid)           | Unique Paths, Longest Common Subsequence     |
| Subset DP              | Knapsack, Target Sum                         |
| DP with Choices        | House Robber, Coin Change                    |
| DP on Strings          | Palindromes, Edit Distance                   |
| DP on Trees/Graphs     | Tree DP, DAG longest path                    |

---


## 📝 Templates

### Top-Down (Memoization)
```python
def dp(i):
    if i in memo:
        return memo[i]
    if base_case(i):
        return result
    memo[i] = combine(dp(i-1), dp(i-2), ...)
    return memo[i]
```
### Bottom-Up (Tabulation)
```python
dp = [0] * (n + 1)
dp[0] = base_case
for i in range(1, n + 1):
    dp[i] = combine(dp[i-1], dp[i-2], ...)
return dp[n]
```