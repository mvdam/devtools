type Brand<K, T> = K & { __brand: T };

type UserId = Brand<string, "UserId">;
type ProductId = Brand<string, "ProductId">;

// both string, but different brand!
const userId = "a-b-c" as UserId;
const productId = "x-y-z" as ProductId;

function getUserById(userId: UserId) {
  // ...
}

console.log(`User: ${getUserById(userId)}`);
