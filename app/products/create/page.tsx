import { Label } from "@/components/ui/label";


const createProductAction = async(formData:FormData) => {
    'use server'
    const name = formData.get('name') as string;
    // We want to make sure that we add the type assertion
    console.log(name)
}


function CreateProductPage() {
    // We add the ID name on the input.
  return (
    <section>
        <h1 className="text-2xl font-semibold mb-8 capitalize">
            create product
        </h1>
        <div className="border p-8 rounded-md">
            <form action={createProductAction}>
                <div className="mb-2">
                    <Label htmlFor = "name">Product</Label>
                </div>
            </form>
        </div>
    </section>
  )
}

export default CreateProductPage