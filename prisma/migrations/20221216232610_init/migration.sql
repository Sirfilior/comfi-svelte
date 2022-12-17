-- CreateTable
CREATE TABLE "RoomContent" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "purchased" BOOLEAN NOT NULL,

    CONSTRAINT "RoomContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Balance" (
    "id" SERIAL NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RoomContent_id_key" ON "RoomContent"("id");
