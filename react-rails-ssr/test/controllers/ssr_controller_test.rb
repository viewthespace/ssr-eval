require 'test_helper'

class SsrControllerTest < ActionDispatch::IntegrationTest
  test "should get hello" do
    get ssr_hello_url
    assert_response :success
  end

end
