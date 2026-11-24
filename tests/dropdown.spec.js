import{test,expect} from '@playwright/test'

test('static dropdown test',async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.locator("#country").selectOption("uk");    // select by value
  await page.waitForTimeout(2000)
  await page.locator("#country").selectOption({label:"United Kingdom"});  // select by label
  await page.waitForTimeout(2000)
  await page.locator("#country").selectOption({index:3}); 
  await page.waitForTimeout(5000)
})

test('multi select dropdown test',async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.locator("#colors").selectOption(["red","blue","green","white"]);  // multi select dropdown
  await page.waitForTimeout(5000)
})

test('dynamic dropdown test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Select an item").click()
    await page.getByText('Item 5',{exact:true}).click()
    expect(await page.getByPlaceholder("Select an item").inputValue()).toBe("Item 5")
    await page.waitForTimeout(5000)
})

test('Auto suggestive dropdown test',async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill("iphone")
    await page.waitForTimeout(1000)
 //   await page.locator(".left-pane-results-container>div").nth(2).click();
    await page.locator(".left-pane-results-container>div").filter({hasText:"iphone 17 256gb"}).click();
    await page.waitForTimeout(5000)
})