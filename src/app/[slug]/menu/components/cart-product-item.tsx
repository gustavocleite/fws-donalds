import Image from "next/image";
import React, { useContext } from "react";

import { formatCurrency } from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../contexts/cart";
import { ChevronLeft, ChevronRightIcon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItemProps {
    product: CartProduct
}

const CartProductItem = ({ product }: CartItemProps) => {
    const {decreaseProductQuantity, increaseProductQuantity} = useContext(CartContext)
    return ( 
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                    {/* ESQUERDA  */}
                <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
                    <Image src={product.imageUrl} alt={product.name} fill />
                </div>
                <div className="space-y-1">
                    <p className="text-xs text-ellipsis max-w-[90%] truncate">{product.name}</p>
                    <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
                    {/* QUANTIDADE   */}
                    <div className="flex items-center gap-1 text-center">
                        <Button className="h-7 w-7 rounded-lg" variant="outline" onClick={() => decreaseProductQuantity(product.id)}>
                            <ChevronLeft />
                        </Button>
                        <p className="w-7 text-xs">{product.quantity}</p>
                        <Button className="h-7 w-7 rounded-lg" variant="destructive" onClick={() => increaseProductQuantity(product.id)}>
                            <ChevronRightIcon/>
                        </Button>
                    </div>
                </div>
                <Button className="h-7 w-7 rounded-lg" variant="outline">
                    <TrashIcon/>
                </Button>
            </div>
        </div>
    );
}

export default CartProductItem;