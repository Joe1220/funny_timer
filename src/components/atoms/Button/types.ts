import { MouseEvent } from "react"

export type IButton = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}
