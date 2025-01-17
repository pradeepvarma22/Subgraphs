// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AirContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AirContract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirContract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirContract", id.toString(), this);
    }
  }

  static load(id: string): AirContract | null {
    return changetype<AirContract | null>(store.get("AirContract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value!.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }
}

export class AirToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AirToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirToken must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirToken", id.toString(), this);
    }
  }

  static load(id: string): AirToken | null {
    return changetype<AirToken | null>(store.get("AirToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value!.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get standard(): string {
    let value = this.get("standard");
    return value!.toString();
  }

  set standard(value: string) {
    this.set("standard", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get totalSupply(): BigInt | null {
    let value = this.get("totalSupply");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalSupply(value: BigInt | null) {
    if (!value) {
      this.unset("totalSupply");
    } else {
      this.set("totalSupply", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class AirTokenMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AirTokenMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirTokenMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirTokenMetadata", id.toString(), this);
    }
  }

  static load(id: string): AirTokenMetadata | null {
    return changetype<AirTokenMetadata | null>(
      store.get("AirTokenMetadata", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get displayContentType(): string {
    let value = this.get("displayContentType");
    return value!.toString();
  }

  set displayContentType(value: string) {
    this.set("displayContentType", Value.fromString(value));
  }

  get displayContent(): string | null {
    let value = this.get("displayContent");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set displayContent(value: string | null) {
    if (!value) {
      this.unset("displayContent");
    } else {
      this.set("displayContent", Value.fromString(<string>value));
    }
  }
}

export class AirExtraData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AirExtraData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirExtraData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirExtraData", id.toString(), this);
    }
  }

  static load(id: string): AirExtraData | null {
    return changetype<AirExtraData | null>(store.get("AirExtraData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value!.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }
}

export class AirDailyAggregateEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AirDailyAggregateEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirDailyAggregateEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirDailyAggregateEntity", id.toString(), this);
    }
  }

  static load(id: string): AirDailyAggregateEntity | null {
    return changetype<AirDailyAggregateEntity | null>(
      store.get("AirDailyAggregateEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get network(): string {
    let value = this.get("network");
    return value!.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get protocolType(): string {
    let value = this.get("protocolType");
    return value!.toString();
  }

  set protocolType(value: string) {
    this.set("protocolType", Value.fromString(value));
  }

  get protocolActionType(): string {
    let value = this.get("protocolActionType");
    return value!.toString();
  }

  set protocolActionType(value: string) {
    this.set("protocolActionType", Value.fromString(value));
  }

  get daySinceEpoch(): BigInt {
    let value = this.get("daySinceEpoch");
    return value!.toBigInt();
  }

  set daySinceEpoch(value: BigInt) {
    this.set("daySinceEpoch", Value.fromBigInt(value));
  }

  get startDayTimestamp(): BigInt {
    let value = this.get("startDayTimestamp");
    return value!.toBigInt();
  }

  set startDayTimestamp(value: BigInt) {
    this.set("startDayTimestamp", Value.fromBigInt(value));
  }

  get updatedTimestamp(): BigInt {
    let value = this.get("updatedTimestamp");
    return value!.toBigInt();
  }

  set updatedTimestamp(value: BigInt) {
    this.set("updatedTimestamp", Value.fromBigInt(value));
  }

  get accounts(): Array<string> | null {
    let value = this.get("accounts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set accounts(value: Array<string> | null) {
    if (!value) {
      this.unset("accounts");
    } else {
      this.set("accounts", Value.fromStringArray(<Array<string>>value));
    }
  }

  get stats(): string {
    let value = this.get("stats");
    return value!.toString();
  }

  set stats(value: string) {
    this.set("stats", Value.fromString(value));
  }

  get walletCount(): BigInt {
    let value = this.get("walletCount");
    return value!.toBigInt();
  }

  set walletCount(value: BigInt) {
    this.set("walletCount", Value.fromBigInt(value));
  }

  get tokenCount(): BigInt {
    let value = this.get("tokenCount");
    return value!.toBigInt();
  }

  set tokenCount(value: BigInt) {
    this.set("tokenCount", Value.fromBigInt(value));
  }

  get transactionCount(): BigInt {
    let value = this.get("transactionCount");
    return value!.toBigInt();
  }

  set transactionCount(value: BigInt) {
    this.set("transactionCount", Value.fromBigInt(value));
  }

  get volumeInUSD(): BigDecimal {
    let value = this.get("volumeInUSD");
    return value!.toBigDecimal();
  }

  set volumeInUSD(value: BigDecimal) {
    this.set("volumeInUSD", Value.fromBigDecimal(value));
  }

  get blockHeight(): BigInt {
    let value = this.get("blockHeight");
    return value!.toBigInt();
  }

  set blockHeight(value: BigInt) {
    this.set("blockHeight", Value.fromBigInt(value));
  }

  get extraData(): Array<string> | null {
    let value = this.get("extraData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set extraData(value: Array<string> | null) {
    if (!value) {
      this.unset("extraData");
    } else {
      this.set("extraData", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class AirDailyAggregateEntityAccount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AirDailyAggregateEntityAccount entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirDailyAggregateEntityAccount must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirDailyAggregateEntityAccount", id.toString(), this);
    }
  }

  static load(id: string): AirDailyAggregateEntityAccount | null {
    return changetype<AirDailyAggregateEntityAccount | null>(
      store.get("AirDailyAggregateEntityAccount", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get dailyAggregatedEntity(): string {
    let value = this.get("dailyAggregatedEntity");
    return value!.toString();
  }

  set dailyAggregatedEntity(value: string) {
    this.set("dailyAggregatedEntity", Value.fromString(value));
  }

  get volumeInUSD(): BigDecimal {
    let value = this.get("volumeInUSD");
    return value!.toBigDecimal();
  }

  set volumeInUSD(value: BigDecimal) {
    this.set("volumeInUSD", Value.fromBigDecimal(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }
}

export class AirAccount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AirAccount entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirAccount must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirAccount", id.toString(), this);
    }
  }

  static load(id: string): AirAccount | null {
    return changetype<AirAccount | null>(store.get("AirAccount", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value!.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get dailyAggregatedEntities(): Array<string> | null {
    let value = this.get("dailyAggregatedEntities");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set dailyAggregatedEntities(value: Array<string> | null) {
    if (!value) {
      this.unset("dailyAggregatedEntities");
    } else {
      this.set(
        "dailyAggregatedEntities",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }
}

export class AirDailyAggregateEntityStats extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AirDailyAggregateEntityStats entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirDailyAggregateEntityStats must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirDailyAggregateEntityStats", id.toString(), this);
    }
  }

  static load(id: string): AirDailyAggregateEntityStats | null {
    return changetype<AirDailyAggregateEntityStats | null>(
      store.get("AirDailyAggregateEntityStats", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get protocolActionType(): string {
    let value = this.get("protocolActionType");
    return value!.toString();
  }

  set protocolActionType(value: string) {
    this.set("protocolActionType", Value.fromString(value));
  }

  get saleStat(): string | null {
    let value = this.get("saleStat");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set saleStat(value: string | null) {
    if (!value) {
      this.unset("saleStat");
    } else {
      this.set("saleStat", Value.fromString(<string>value));
    }
  }
}

export class AirNFTSaleStats extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AirNFTSaleStats entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirNFTSaleStats must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirNFTSaleStats", id.toString(), this);
    }
  }

  static load(id: string): AirNFTSaleStats | null {
    return changetype<AirNFTSaleStats | null>(store.get("AirNFTSaleStats", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get transactions(): Array<string> {
    let value = this.get("transactions");
    return value!.toStringArray();
  }

  set transactions(value: Array<string>) {
    this.set("transactions", Value.fromStringArray(value));
  }

  get walletCount(): BigInt {
    let value = this.get("walletCount");
    return value!.toBigInt();
  }

  set walletCount(value: BigInt) {
    this.set("walletCount", Value.fromBigInt(value));
  }

  get tokenCount(): BigInt {
    let value = this.get("tokenCount");
    return value!.toBigInt();
  }

  set tokenCount(value: BigInt) {
    this.set("tokenCount", Value.fromBigInt(value));
  }

  get transactionCount(): BigInt {
    let value = this.get("transactionCount");
    return value!.toBigInt();
  }

  set transactionCount(value: BigInt) {
    this.set("transactionCount", Value.fromBigInt(value));
  }

  get volumeInUSD(): BigDecimal {
    let value = this.get("volumeInUSD");
    return value!.toBigDecimal();
  }

  set volumeInUSD(value: BigDecimal) {
    this.set("volumeInUSD", Value.fromBigDecimal(value));
  }

  get extraData(): Array<string> | null {
    let value = this.get("extraData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set extraData(value: Array<string> | null) {
    if (!value) {
      this.unset("extraData");
    } else {
      this.set("extraData", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class AirNFTSaleTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AirNFTSaleTransaction entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AirNFTSaleTransaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AirNFTSaleTransaction", id.toString(), this);
    }
  }

  static load(id: string): AirNFTSaleTransaction | null {
    return changetype<AirNFTSaleTransaction | null>(
      store.get("AirNFTSaleTransaction", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value!.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get saleStat(): string {
    let value = this.get("saleStat");
    return value!.toString();
  }

  set saleStat(value: string) {
    this.set("saleStat", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get transactionToken(): string {
    let value = this.get("transactionToken");
    return value!.toString();
  }

  set transactionToken(value: string) {
    this.set("transactionToken", Value.fromString(value));
  }

  get paymentToken(): string | null {
    let value = this.get("paymentToken");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set paymentToken(value: string | null) {
    if (!value) {
      this.unset("paymentToken");
    } else {
      this.set("paymentToken", Value.fromString(<string>value));
    }
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get paymentAmount(): BigInt | null {
    let value = this.get("paymentAmount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set paymentAmount(value: BigInt | null) {
    if (!value) {
      this.unset("paymentAmount");
    } else {
      this.set("paymentAmount", Value.fromBigInt(<BigInt>value));
    }
  }

  get fees(): BigInt | null {
    let value = this.get("fees");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set fees(value: BigInt | null) {
    if (!value) {
      this.unset("fees");
    } else {
      this.set("fees", Value.fromBigInt(<BigInt>value));
    }
  }

  get tokenMetadata(): string | null {
    let value = this.get("tokenMetadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenMetadata(value: string | null) {
    if (!value) {
      this.unset("tokenMetadata");
    } else {
      this.set("tokenMetadata", Value.fromString(<string>value));
    }
  }
}
