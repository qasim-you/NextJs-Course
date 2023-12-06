import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "postcss"


export function CreateBill() {
  return (
    <div className="flex justify-center mt-8">
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline">Create Bill</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when yo re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
           <label htmlFor="" className="text-right">heloo</label>
           <input className="col-span-3" type="text" value="9" />
                </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
           <label htmlFor="" className="text-right text-xl">heloo</label>
           <input className="col-span-3" type="text" value="9" />
                </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
           <label htmlFor="" className="text-right">heloo</label>
           <input className="col-span-3" type="text" value="9" />
                </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}
