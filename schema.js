// Product Category schema
class ProductCategory {
  constructor(id, name, desc, created_at, modified_at, deleted_at) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.deleted_at = deleted_at;
  }
}

// Product Inventory schema
class ProductInventory {
  constructor(id, quantity, created_at, modified_at, deleted_at) {
    this.id = id;
    this.quantity = quantity;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.deleted_at = deleted_at;
  }
}

// Discount schema
class Discount {
  constructor(id, name, desc, discount_percent, active, created_at, modified_at, deleted_at) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.discount_percent = discount_percent;
    this.active = active;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.deleted_at = deleted_at;
  }
}

// Product schema
class Product {
  constructor(id, name, desc, SKU, category_id, inventory_id, price, discount_id, created_at, modified_at, deleted_at) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.SKU = SKU;
    this.category_id = category_id;
    this.inventory_id = inventory_id;
    this.price = price;
    this.discount_id = discount_id;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.deleted_at = deleted_at;
  }
}

// Export the schema classes
module.exports = {
  ProductCategory,
  ProductInventory,
  Discount,
  Product
};
